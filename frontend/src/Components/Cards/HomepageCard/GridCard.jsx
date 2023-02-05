import React from "react";

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
} from "./GridCardStyles";

import loffi from "../../../Assets/Images/loffi.png";
import star from "../../../Assets/Content/Star.svg";

const Card = ({ title, episodesWatched, episodeCount, description, rating, image, watchTime }) => {
    const totalSeconds = 22 * 60;
    const totalSecondsWatched = parseInt(watchTime?.split(":")[0]) * 60 + parseInt(watchTime?.split(":")[1]);
    const ratio = (totalSecondsWatched / totalSeconds) * 100;

    const episodeRatio = (episodesWatched / episodeCount) * 100;

    return (
        <>
            <SeriesCardOuter showProgress={watchTime}>
                <SeriesCardInner>
                    <SeriesCardImage src={image?.includes("upload") ? `api/${image}` : image} />
                    <CardInformationContainer>
                        <CardTitle>{title.slice(0, 20)}</CardTitle>
                        <EpisodeContainer hasWatchTime={watchTime}>
                            <EpisodeCount>
                                Ep {episodesWatched} / {episodeCount}
                            </EpisodeCount>
                            <EpisodeLineGray />
                            <EpisodeLineProgress progress={episodeRatio} />
                        </EpisodeContainer>
                    </CardInformationContainer>

                    <CardRatingContainer>
                        <CardRatingCenter>
                            <CardRatingImg src={star} alt="Star" />
                            <CardRatingTxt>{rating}</CardRatingTxt>
                        </CardRatingCenter>
                    </CardRatingContainer>
                </SeriesCardInner>
                <WatchTimeContainer />
            </SeriesCardOuter>
        </>
    );
};

export default Card;
