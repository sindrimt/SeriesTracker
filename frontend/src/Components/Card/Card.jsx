import React from "react";

import {
  SeriesCardOuter,
  SeriesCardInner,
  SeriesCardImage,
  WatchTimeContainer,
  CardInformationContainer,
  CardRating,
  EpisodeContainer,
  CardTitle,
  EpisodeCount,
  EpisodeLineGray,
  EpisodeLineProgress,
} from "./CardStyles";

import loffi from "../../Assets/Images/loffi.png";
import star from "../../Assets/Content/Star.svg";

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
          </CardInformationContainer>

          <CardRating src={star} alt="Star" />
        </SeriesCardInner>
        <WatchTimeContainer />
      </SeriesCardOuter>
    </>
  );
};

export default Card;
