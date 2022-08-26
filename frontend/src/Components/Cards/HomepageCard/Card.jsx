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
} from "./CardStyles";

import loffi from "../../../Assets/Images/loffi.png";
import star from "../../../Assets/Content/Star.svg";
import { useAuth } from "../../../firebase";

import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiFillDelete, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";

import DeleteCardPopup from "../../Popups/DeleteCardPopup";
import { render } from "react-dom";

const Card = ({ title, episodesWatched, episodeCount, description, rating, image, watchTime, id, update, setIsDeleted, isDeleted }) => {
    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;
    const [episodesWatchedState, setEpisodesWatchesState] = useState(episodesWatched);
    const [deletePopup, setDeletePopup] = useState(false);

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
            <SeriesCardOuter showProgress={watchTime}>
                <SeriesCardInner>
                    <SeriesCardImage src={image?.includes("upload") ? `api/${image}` : image} />
                    <CardInformationContainer>
                        <CardTitle>{title}</CardTitle>
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
                {/* <WatchTimeContainer />
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
                )} */}
            </SeriesCardOuter>
        </>
    );
};

export default Card;
