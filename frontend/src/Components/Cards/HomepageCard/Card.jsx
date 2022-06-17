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
} from "./CardStyles";

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
            <CardTitle>{title}</CardTitle>
            <EpisodeContainer hasWatchTime={watchTime}>
              <EpisodeCount>
                Ep {episodesWatched} / {episodeCount}
              </EpisodeCount>
              <EpisodeLineGray />
              <EpisodeLineProgress progress={episodeRatio} />
            </EpisodeContainer>
            <CardDescription>Wealth, fame, power. Gold Roger obtained ever ...</CardDescription>
          </CardInformationContainer>

          <CardRatingContainer>
            <CardRatingCenter>
              <CardRatingImg src={star} alt="Star" />
              <CardRatingTxt>{rating}</CardRatingTxt>
            </CardRatingCenter>
          </CardRatingContainer>
        </SeriesCardInner>
        <WatchTimeContainer />
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
      </SeriesCardOuter>
    </>
  );
};

export default Card;
