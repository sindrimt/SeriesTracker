import React, { useState } from "react";

import {
    SeriesCardOuter,
    SeriesCardInner,
    SeriesCardImage,
    WatchTimeContainer,
    CardInformationContainer,
    EpisodeContainer,
    CardTitle,
    EpisodeCount,
    EpisodeLineGray,
    EpisodeLineProgress,
    CardRatingImg,
    CardRatingContainer,
    CardRatingTxt,
    CardDescription,
    CardRatingCenter,
    ProgressLine,
    ProgressLineGray,
    ProgressLineText,
    SeriesCardImageContainer,
} from "./CardStyles";

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

const Card = ({ title, episodesWatched, episodeCount, description, rating, image, watchTime, id, update, setIsDeleted, isDeleted }) => {
    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;
    const [episodesWatchedState, setEpisodesWatchesState] = useState(episodesWatched);
    const [deletePopup, setDeletePopup] = useState(false);
    const [imageAvgColor, setImageAvgColor] = useState("");

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
        zIndex: "140000000000001400000000000014000000000000140000000000001400000000000014000000000001400000000000014000000000000140000000000001400000000000014000000000000",
    };

    const currentUser = useAuth();

    const episodeRatio = (episodesWatchedState / episodeCount) * 100;

    const handleAddEpisode = (e) => {
        return axios
            .patch(`/api/series/${id}`, { operation: "add" })
            .then((response) => {})
            .catch((err) => {
                setEpisodesWatchesState(episodesWatchedState + 1);
                console.log(err);
            });
    };

    const handleSubtractEpisode = (e) => {
        return axios
            .patch(`/api/series/${id}`, { operation: "subtract" })
            .then((response) => {})
            .catch((err) => {
                setEpisodesWatchesState(episodesWatchedState - 1);
            });
    };

    const handleDeleteCard = () => {
        console.log("Clicked delete button");
        setDeletePopup(!deletePopup);
    };

    const handleConfirmDelete = () => {
        console.log("Series deleted successfully.");
        axios
            .delete(`/api/series/${id}`)
            .then((response) => {
                console.log("Series deleted successfully.");
                console.log(response);
                setIsDeleted(!isDeleted);
            })
            .catch((err) => {
                setIsDeleted(!isDeleted);
            });
        setDeletePopup(false);
    };

    const handleDeclineDelete = () => {
        console.log("Series was not deleted.");
        setDeletePopup(false);
    };

    // Check wether the user clicked episode button or not
    // If not, open the popup
    const handleOpenPopup = (e) => {
        if (["plus", "minus", "delete"].includes(e.target.className.animVal)) return;
        else {
            handleOpen();
        }
    };

    return (
        <>
            {deletePopup && (
                <DeleteCardPopup
                    popupText="Are you sure you want to delete the series?"
                    optionLeft="Yes"
                    optionRight="No"
                    handleOptionLeft={handleConfirmDelete}
                    handleOptionRight={handleDeclineDelete}
                />
            )}
            <SeriesCardOuter onClick={(e) => handleOpenPopup(e)}>
                <SeriesCardInner>
                    <SeriesCardImageContainer>
                        <SeriesCardImage src={image?.includes("upload") ? `api/${image}` : image} />
                    </SeriesCardImageContainer>
                    <CardInformationContainer showProgress={watchTime}>
                        <CardTitle>{title.slice(0, 20)}</CardTitle>
                        <EpisodeContainer hasWatchTime={watchTime}>
                            <EpisodeCount>
                                Ep {episodesWatchedState} / {episodeCount}
                            </EpisodeCount>
                            <EpisodeLineGray />
                            <EpisodeLineProgress progress={episodeRatio} />
                        </EpisodeContainer>
                        {/* <CardDescription>{description.slice(0, 60)}</CardDescription> */}
                        <CardDescription>
                            <AiOutlinePlusCircle size={22} className="plus" onClick={handleAddEpisode} />
                            <AiOutlineMinusCircle size={22} className="minus" onClick={handleSubtractEpisode} />
                            <AiOutlineCloseCircle size={22} className="delete" color={"red"} onClick={handleDeleteCard} />
                        </CardDescription>
                    </CardInformationContainer>

                    <CardRatingContainer>
                        <CardRatingCenter>
                            <CardRatingImg src={star} alt="Star" />
                            <CardRatingTxt>{rating}</CardRatingTxt>
                        </CardRatingCenter>
                    </CardRatingContainer>
                </SeriesCardInner>
            </SeriesCardOuter>
            <Modal sx={modalStyle} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <>
                    <PopupOuter>
                        <QuitSymbol onClick={handleClose}>
                            <IoMdClose size={22} />
                        </QuitSymbol>
                        <OuterOuter borderColor={imageAvgColor}>
                            <LeftBall bgColor={imageAvgColor} />
                            <BottomBall bgColor={imageAvgColor} />
                        </OuterOuter>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            {/* <LeftBall />
                            <BottomBall /> */}
                            <PopupImage src={image?.includes("upload") ? `api/${image}` : image} />
                        </div>
                        <PoputTextBoxOuter>
                            <PopupHeader>
                                {title}

                                <div>
                                    {episodesWatchedState} / {episodeCount} episodes watched
                                </div>
                            </PopupHeader>
                            <PopupDescription>{description.slice(0, 240)}</PopupDescription>
                            <div>
                                <WatchTimeContainer>
                                    {watchTime && (
                                        <>
                                            <ProgressLineText>{watchTime} / 22:00</ProgressLineText>
                                        </>
                                    )}
                                    {watchTime && (
                                        <>
                                            <ProgressLine progress={ratio} />
                                            <ProgressLineGray />
                                        </>
                                    )}
                                </WatchTimeContainer>
                            </div>
                        </PoputTextBoxOuter>
                        <PopupCharacterImage src={chainsaw} />
                    </PopupOuter>
                </>
            </Modal>
        </>
    );
};

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

export default Card;
