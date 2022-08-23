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

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import axios from "axios";

const Card = ({ title, episodesWatched, episodeCount, description, rating, image, watchTime, id }) => {
    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;
    const [episodesWatchedState, setEpisodesWatchesState] = useState(episodesWatched);

    const currentUser = useAuth();

    const episodeRatio = (episodesWatched / episodeCount) * 100;

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

    return (
        <>
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
                            <AiOutlinePlusCircle size={20} className="plus" onClick={handleAddEpisode} />
                            <AiOutlineMinusCircle size={20} className="minus" onClick={handleSubtractEpisode} />
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
