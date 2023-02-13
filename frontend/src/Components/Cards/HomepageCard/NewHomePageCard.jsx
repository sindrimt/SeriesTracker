import React, { useState, useEffect } from "react";

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
    EpisodeContainer,
    EpisodeCount,
    EpisodeLineGray,
    EpisodeLineProgress,
    CardDescription,
    CardRatingCenter,
    ProgressLine,
    ProgressLineGray,
    ProgressLineText,
    SeriesCardImageContainer,
    BorderOuter,
} from "./NewHomePageCardsStyles";
import { CgScreen } from "react-icons/cg";
import { duration } from "@mui/material";

import loffi from "../../../Assets/Images/loffi.png";
import star from "../../../Assets/Content/Star.svg";
import chainsaw from "../../../Assets/Cards/AnimeCard/chainsaw.svg";
import { useAuth } from "../../../firebase";

import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillDelete, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteCardPopup from "../../Popups/DeleteCardPopup";
import { render } from "react-dom";
import { flexbox } from "@mui/system";
import styled from "styled-components";
import { FastAverageColor } from "fast-average-color";
import { IoMdClose } from "react-icons/io";
import AddButton from "../../Buttons/EpisodeButtons/AddButton/AddButton";
import DeleteButton from "../../Buttons/EpisodeButtons/DeleteButton/DeleteButton";
import BasicModal from "../../MUI_Modals/BasicModal";

const SearchCard = ({
    title,
    episodes,
    image,
    description,
    episodeLength,
    airing,
    duration,
    type,
    id,
    isDeleted,
    setIsDeleted,
    update,
    episodesWatched,
    episodeCount,
    rating,
    watchTime,
    updateState,
    serie,
}) => {
    let changedDescription = "";
    if (serie?.synopsis?.length >= 200) {
        changedDescription = serie?.synopsis.slice(0, 200) + "...";
    } else if (!serie?.synopsis?.length) {
        changedDescription = "";
    } else {
        changedDescription = serie?.synopsis;
    }

    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;
    const [episodesWatchedState, setEpisodesWatchesState] = useState(episodesWatched);
    const [deletePopup, setDeletePopup] = useState(false);
    const [imageAvgColor, setImageAvgColor] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);

    const fac = new FastAverageColor();

    fac.getColorAsync(image)
        .then((color) => {
            //console.log("Average color", color);
            setImageAvgColor(color.rgba);
        })
        .catch((e) => {
            fac.getColorAsync(`api/${image}`)
                .then((color) => {
                    //console.log("Average color", color);
                    setImageAvgColor(color.rgba);
                })
                .catch((e) => {
                    console.log(e);
                });
        });

    useEffect(() => {
        setEpisodesWatchesState(episodesWatched);
    }, [updateState]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height: "50%",
        bgcolor: "background.paper",
        border: "1px solid #b1b1b1",
        boxShadow: 24,
        p: 4,
    };
    const modalStyle = {
        zIndex: "99999999999999999999999",
    };

    const currentUser = useAuth();

    const episodeRatio = (episodesWatchedState / episodeCount) * 100;

    const toggleModal = () => {
        if (open) {
            handleClose();
        } else {
            handleOpen();
        }
    };

    const handleAddEpisode = (e) => {
        return axios
            .patch(`/api/series/${id}`, { operation: "add" })
            .then((response) => {
                setEpisodesWatchesState(episodesWatchedState + 1);
            })
            .catch((err) => {
                setEpisodesWatchesState(episodesWatchedState + 1);
                //console.log(err);
            });
    };

    const handleSubtractEpisode = (e) => {
        return axios
            .patch(`/api/series/${id}`, { operation: "subtract" })
            .then((response) => {
                setEpisodesWatchesState(episodesWatchedState - 1);
            })
            .catch((err) => {
                setEpisodesWatchesState(episodesWatchedState - 1);
            });
    };

    const handleDeleteCard = () => {
        setIsExpanded(true);
        setDeletePopup(!deletePopup);
    };

    const handleConfirmDelete = () => {
        axios
            .delete(`/api/series/${id}`)
            .then((response) => {
                // console.log("Series deleted successfully.");
                // console.log(response);
                setIsDeleted(!isDeleted);
                setIsExpanded(false);
            })
            .catch((err) => {
                setIsDeleted(!isDeleted);
                setIsExpanded(false);
            });
        setDeletePopup(false);
    };

    const handleDeclineDelete = () => {
        //console.log("Series was not deleted.");
        setDeletePopup(false);
        setIsExpanded(false);
    };

    const handleExpand = (e) => {
        //console.log(e.target.className);
        if (e.target.innerHTML === "Remove") {
            console.log("RMOVE");
            setIsExpanded(true);
            handleSubtractEpisode();
        } else if (e.target?.innerHTML === "Add") {
            console.log("ADDD");
            setIsExpanded(true);
            handleAddEpisode();
        } else if (["undefined", "delete", ""].includes(e.target.className.animVal)) {
            setIsExpanded(true);
            handleDeleteCard();
        } else {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <>
            <Outer
                onClick={(e) => {
                    setIsExpanded(!isExpanded);
                    handleExpand(e);
                }}
                isExpanded={isExpanded}
            >
                <ImageContainer>
                    <Image src={image?.includes("upload") ? `api/${image}` : image} alt="Image" />
                    {/*  <Duration>{episodeLength}</Duration> */}

                    <Information>
                        <Title>{title}</Title>
                        <ViewsContainer>
                            <Views>{!episodeCount ? "N/A" : episodeCount + " Episodes"}</Views>
                            {/* //TODO Remember to change Not airing to Airing when we have the airing field */}
                            <Upload>{airing ? "Not Airing" : "Not airing"}</Upload>
                        </ViewsContainer>
                        <Profile>
                            {/* <ProfilePicture /> */}
                            <CgScreen color="rgb(100, 100, 100)" size={22} />
                            <ProfileName>{type === "Movie" ? "Anime / Movie" : "Anime"}</ProfileName>
                        </Profile>
                        <EpisodeContainer hasWatchTime={watchTime}>
                            <EpisodeCount>
                                Ep {episodesWatchedState} / {episodeCount}
                            </EpisodeCount>
                            <EpisodeLineGray />
                            <EpisodeLineProgress progress={episodeRatio} />
                        </EpisodeContainer>
                        {/* 
                        //TODO Hei marcus!!
                        //TODO Når man uncommenter description, blir bildet litt mindre, WHYYY
                        //TODO Du er sånn grid mester så pls fix
                        */}
                        {/*  <Description show={isExpanded}>{changedDescription}</Description> */}

                        {isExpanded && (
                            <CardDescription>
                                <AddButton className="plus" />
                                <DeleteButton className="minus" />
                                {/*   <AiOutlinePlusCircle size={22} className="plus" onClick={handleAddEpisode} /> */}
                                {/*  <AiOutlineMinusCircle size={22} className="minus" onClick={handleSubtractEpisode} /> */}
                                <RemoveSeriesButton
                                    onClick={() => {
                                        toggleModal();
                                    }}
                                >
                                    Delete
                                </RemoveSeriesButton>
                            </CardDescription>
                        )}
                    </Information>
                </ImageContainer>
            </Outer>
            <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    );
};

const RemoveSeriesButton = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 20px;
    transition: 0.2s;
    text-align: center;
    line-height: 37px;
    font-size: 1rem;
    font-weight: 600;
    //Bg is transparent for darkmode
    background-color: ${(props) => props.theme.cardButtonBG};
    color: ${(props) => props.theme.chartCard};
    border: 0.01em solid ${(props) => props.theme.navbar.fontColor2};
    &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        background-color: rgba(197, 45, 45, 0.5);
        width: 120px;
    }
`;

const OuterOuter = styled.div`
    position: absolute;
    width: 100%;
    height: 300px;
    background-color: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid ${(props) => props.borderColor};
`;

const PopupOuter = styled.div`
    position: absolute;
    width: 65%;
    height: 300px;
    background-color: #f7f7f7;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    color: ${(props) => props.theme.homepageCard.fontColor};
    background-color: ${(props) => props.theme.homepageCard.background};

    @media (max-width: 1100px) {
        width: 80%;
    }
`;

const QuitSymbol = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    transition: 0.15s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
    }
`;

const PopupImage = styled.img`
    width: 150px;
    height: 220px;
    margin-left: 40px;
    border-radius: 8px;
    z-index: 1;
`;

const LeftBall = styled.div`
    position: absolute;
    height: 130%;
    background-color: ${(props) => props.bgColor};
    left: -115px;
    top: -45px;
    border-radius: 50%;
    width: 200px;
    z-index: -11;
`;

const BottomBall = styled.div`
    position: absolute;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    left: 250px;
    bottom: -75px;
    border-radius: 50%;
    width: 380px;
    z-index: -10;
`;

const PoputTextBoxOuter = styled.div`
    display: flex;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    margin-left: 30px;
    height: 90%;
    color: ${(props) => props.theme.homepageCard.fontColor};
    @media (max-width: 900px) {
        grid-template-rows: auto auto auto;
    }
    @media (max-width: 600px) {
        overflow-y: scroll;
        z-index: 999;
    }
`;

const PopupHeader = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.homepageCard.fontColor};

    div {
        font-size: 16px;
    }
`;

const PopupDescription = styled.div`
    font-size: 16px;
    margin-top: 10px;
    color: ${(props) => props.theme.homepageCard.fontColor};
    width: 80%;
`;

const PopupCharacterImage = styled.img`
    position: absolute;
    right: -75px;
    top: -90px;
    width: 320px;
    height: auto;
    transform: scale(1);

    @media (max-width: 1100px) {
        display: none;
    }
`;

export default SearchCard;
