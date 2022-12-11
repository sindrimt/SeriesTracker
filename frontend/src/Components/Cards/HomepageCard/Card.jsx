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

const Card = ({ title, episodesWatched, episodeCount, description, rating, image, watchTime, id, update, setIsDeleted, isDeleted }) => {
    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;
    const [episodesWatchedState, setEpisodesWatchesState] = useState(episodesWatched);
    const [deletePopup, setDeletePopup] = useState(false);

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
                console.log(err);
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
            <SeriesCardOuter showProgress={watchTime} onClick={handleOpen}>
                <SeriesCardInner>
                    <SeriesCardImageContainer>
                        <SeriesCardImage src={image?.includes("upload") ? `api/${image}` : image} />
                    </SeriesCardImageContainer>
                    <CardInformationContainer>
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
                            <PopupDescription>{description}</PopupDescription>
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

const PopupOuter = styled.div`
    position: absolute;
    width: 65%;
    height: 300px;
    background-color: #fdf9f9;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 1fr 5fr;
    //overflow: hidden;
    align-items: center;
`;

const PopupImage = styled.img`
    width: 150px;
    height: 220px;
    margin-left: 40px;
    border-radius: 8px;
    z-index: 10;
`;

const LeftBall = styled.div`
    position: absolute;
    height: 130%;
    background-color: #e96c6c;
    left: -105px;
    top: -45px;
    border-radius: 50%;
    width: 200px;
    z-index: -10;
`;

const BottomBall = styled.div`
    position: absolute;
    height: 100px;
    background-color: #e96c6c;
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
`;

const PopupHeader = styled.div`
    font-size: 20px;
    font-weight: 600;

    div {
        font-size: 16px;
    }
`;

const PopupDescription = styled.div`
    font-size: 16px;
    margin-top: 10px;
    color: #2f2f2f;
`;

const PopupCharacterImage = styled.img`
    position: absolute;
    right: -65px;
    top: -60px;
    width: 280px;
    height: auto;
    transform: scale(1);
`;

export default Card;
