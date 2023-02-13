import React, { useState, useEffect, useRef, forwardRef } from "react";

import {
    Outer,
    ImageContainer,
    Image,
    Title,
    Upload,
    Views,
    ViewsContainer,
    Information,
    Profile,
    ProfilePicture,
    ProfileName,
    Duration,
    Description,
    FormFieldOuter,
    SubmitButton,
    SliderContainer,
} from "./SearchCardStyles";
import { CgScreen } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { duration } from "@mui/material";
import Slider from "@mui/material/Slider";
import FormField from "../../FormField/FormField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { useAuth } from "../../../firebase";
import LoadingBar from "react-top-loading-bar";
import MuiAlert from "@mui/material/Alert";

const SearchCard = ({ title, episodes, image, description, episodeLength, airing, duration, type, anime }) => {
    let changedDescription = "";
    if (description?.length >= 200) {
        changedDescription = description.slice(0, 200) + "...";
    } else if (!description?.length) {
        changedDescription = "";
    } else {
        changedDescription = description;
    }

    const currentUser = useAuth();

    const [isExpanded, setIsExpanded] = useState(false);
    const [animeTitle, setAnimeTitle] = useState(title);
    const [episodesWatched, setEpisodesWatched] = useState(1);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [formImage, setFormImage] = useState({});
    const [rating, setRating] = useState(1);
    const [watchTime, setWatchTime] = useState("");
    const [totalEpisodes, setTotalEpisodes] = useState(episodes);
    const [severity, setSeverity] = useState("success");

    const [progress, setProgress] = useState(0);

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSnackbar(false);
    };

    const handleSliderChange = (name) => (e, value) => {
        setRating(parseInt(value));
    };

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);

        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProgress(progress + staticStart());

        let formdata = new FormData();

        //formdata.append("image", image);
        formdata.append("userId", currentUser?.uid);
        formdata.append("title", animeTitle);
        formdata.append("username", currentUser?.email.split("@")[0]);
        formdata.append("episodesWatched", !episodesWatched ? 1 : episodesWatched);
        formdata.append("episodeCount", !totalEpisodes ? episodes : totalEpisodes /* episodes */);
        formdata.append("rating", rating);
        formdata.append("image", selectedFile ? selectedFile : image);
        formdata.append("watchTime", watchTime);
        formdata.append("description", !description ? "" : description);
        formdata.append("episodeLength", !episodeLength ? "" : episodeLength);
        formdata.append("background", anime?.background);
        formdata.append("demographics", JSON.stringify(anime?.demographics));
        formdata.append("duration", anime?.duration);
        formdata.append("genres", JSON.stringify(anime?.genres));
        formdata.append("mal_id", anime?.mal_id);
        formdata.append("popularity", anime?.popularity);
        formdata.append("producers", JSON.stringify(anime?.producers));
        formdata.append("rank", anime?.rank);
        formdata.append("ratingPg", anime?.ratingPg);
        formdata.append("score", anime?.score);
        formdata.append("scored_by", anime?.scored_by);
        formdata.append("season", anime?.season);
        formdata.append("source", anime?.source);
        formdata.append("status", anime?.status);
        formdata.append("studios", JSON.stringify(anime?.studios));
        formdata.append("synopsis", anime?.synopsis);
        formdata.append("themes", JSON.stringify(anime?.themes));
        formdata.append("titles", JSON.stringify(anime?.titles));
        formdata.append("type", anime?.type);
        formdata.append("year", anime?.year);
        formdata.append("malURL", anime?.malURL);

        // The reason why this ancient technology is used is because multer (image upload)
        //requires form data format or something cringe
        fetch("api/series", {
            method: "POST",
            body: formdata,
        })
            .then((res) => res.text())
            .then((resBody) => {
                setSeverity("success");
                setProgress(progress + 100);
                setOpenSnackbar(true);
                setIsExpanded(false);
            })
            .catch(() => {
                setSeverity("error");
                setProgress(progress + 100);
                setOpenSnackbar(true);
                setIsExpanded(false);
            });
    };

    const handleRemoveImage = () => {
        setPreview();
        setFormImage("");
    };

    const handleExpand = (e) => {
        //console.log(e.target?.innerHTML.includes('type = "range"'));
        if (e.target.innerHTML === "Close") {
            return;
        } else if (e.target?.innerHTML.includes('type = "range"')) {
            // console.log("ØAOSIDHFUASDHGF");
            return;
        } else {
            setIsExpanded(!isExpanded);
        }
    };

    const staticStart = () => {
        let min = Math.ceil(3);
        let max = Math.floor(7);
        return Math.floor((Math.random() * (max - min) + min) * 10);
    };

    const Alert = forwardRef((props, ref) => {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} /* sx={{ background: "#a64fcb" }}  */ />;
    });

    return (
        <>
            <LoadingBar color="#a63fcb" progress={progress} onLoaderFinished={() => setProgress(0)} />

            <Outer
                onClick={(e) => {
                    handleExpand(e);
                }}
                isExpanded={isExpanded}
            >
                <ImageContainer>
                    <Image src={image} alt="Image" />
                    {/*  <Duration>{episodeLength}</Duration> */}

                    <Information>
                        <Title>{title}</Title>
                        <ViewsContainer>
                            <Views>{!episodes ? "N/A" : episodes + " Episodes"}</Views>
                            <Upload>{airing ? "Airing" : "Not airing"}</Upload>
                        </ViewsContainer>
                        <Profile>
                            {/* <ProfilePicture /> */}
                            <CgScreen color="rgb(60, 60, 60)" size={22} />
                            <ProfileName>
                                {type === "Movie" ? "Anime / Movie" : "Anime"} - {duration}
                            </ProfileName>
                        </Profile>

                        {isExpanded && (
                            <>
                                <Description>{changedDescription}</Description>
                                {/*   <FormFieldOuter>
                                    <form onSubmit={handleSubmit}>
                                        
                                        <FormField
                                            type="text"
                                            placeholder={episodeLength + " (Optional)"}
                                            change={(e) => setWatchTime(e.target.value)}
                                        />
                                        <input type="file" onChange={onSelectFile} />
                                        {preview && (
                                            <span onClick={handleRemoveImage} style={{ backgroundColor: "papayawhip", color: "red", padding: "2px" }}>
                                                Remove image
                                            </span>
                                        )}
                                        <button type="submit">Submit</button>
                                    </form>
                                </FormFieldOuter> */}
                                <SliderContainer>
                                    <Slider
                                        onChange={handleSliderChange("rating")}
                                        defaultValue={rating}
                                        step={1}
                                        min={1}
                                        max={10}
                                        sx={{ width: "80%" }}
                                        key={`slider-${rating}`}
                                        marks={[
                                            {
                                                value: 1,
                                                label: "1",
                                            },
                                            {
                                                value: 2,
                                                label: "2",
                                            },
                                            {
                                                value: 3,
                                                label: "3",
                                            },
                                            {
                                                value: 4,
                                                label: "4",
                                            },
                                            {
                                                value: 5,
                                                label: "5",
                                            },
                                            {
                                                value: 6,
                                                label: "6",
                                            },
                                            {
                                                value: 7,
                                                label: "7",
                                            },
                                            {
                                                value: 8,
                                                label: "8",
                                            },
                                            {
                                                value: 9,
                                                label: "9",
                                            },
                                            {
                                                value: 10,
                                                label: "10",
                                            },
                                        ]}
                                        valueLabelDisplay="off"
                                    />
                                </SliderContainer>
                                {/* <button onClick={() => setIsExpanded(false)}>Close</button> */}
                                <SubmitButton onClick={handleSubmit}>
                                    <AiOutlinePlus size={25} color={"rgb(80, 80, 80)"} />
                                </SubmitButton>
                            </>
                        )}
                    </Information>
                </ImageContainer>
            </Outer>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: "100%" }}>
                    Successfully added <span style={{ fontWeight: 500 }}>{title}</span> to your list!
                </Alert>
            </Snackbar>
        </>
    );
};

export default SearchCard;
