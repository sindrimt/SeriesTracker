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

const Card = ({ title, episodesWatched, episodeCount, description, rating, image }) => {
  return (
    <>
      <SeriesCardOuter>
        <SeriesCardInner>
          <SeriesCardImage src={image?.includes("upload") ? `api/${image}` : image} />
          <CardInformationContainer>
            <CardTitle>{title}</CardTitle>
            <EpisodeContainer>
              <EpisodeCount>
                Ep {episodesWatched} / {episodeCount}
              </EpisodeCount>
              <EpisodeLineGray />
              <EpisodeLineProgress />
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
        <ProgressLineText>07:33 / 22:23</ProgressLineText>
        <ProgressLine />
        <ProgressLineGray />
      </SeriesCardOuter>
    </>
  );
};

export default Card;
