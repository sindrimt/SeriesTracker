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

const Card = () => {
  return (
    <>
      <SeriesCardOuter>
        <SeriesCardInner>
          <SeriesCardImage src={loffi} />
          <CardInformationContainer>
            <CardTitle>One Piece</CardTitle>
            <EpisodeContainer>
              <EpisodeCount>Ep 694 / 1016</EpisodeCount>
              <EpisodeLineGray />
              <EpisodeLineProgress />
            </EpisodeContainer>
            <CardDescription>Wealth, fame, power. Gold Roger obtained ever ...</CardDescription>
          </CardInformationContainer>

          <CardRatingContainer>
            <CardRatingCenter>
              <CardRatingImg src={star} alt="Star" />
              <CardRatingTxt>9.2</CardRatingTxt>
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
