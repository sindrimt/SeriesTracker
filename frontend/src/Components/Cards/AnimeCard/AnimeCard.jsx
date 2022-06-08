import React from "react";

import {
  AnimeCardOuter,
  CounterButton,
  EpisodeCount,
  LeftOuter,
  MiddleOuter,
  RightOuter,
  Title,
  AnimeImage,
} from "./AnimeCardStyles";

import plus from "../../../Assets/Cards/AnimeCard/plus.svg";

import { motion, AnimateSharedLayout } from "framer-motion";

const AnimeCard = ({ title, episodes, image }) => {
  return (
    <AnimeCardOuter onClick={() => console.log(title)}>
      <LeftOuter>
        <AnimeImage src={image} alt="Image" />
        <Title>{title.slice(0, 20)}</Title>
      </LeftOuter>
      <MiddleOuter></MiddleOuter>
      <RightOuter>
        <EpisodeCount>{episodes}</EpisodeCount>
        <CounterButton src={plus} alt="Plus" />
      </RightOuter>
    </AnimeCardOuter>
  );
};

export default AnimeCard;
