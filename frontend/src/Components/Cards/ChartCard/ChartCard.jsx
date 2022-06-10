import React from "react";

import {
  ContentRightOuter,
  ChartsContainer,
  Chart,
  EntryImg,
  EntryInfo,
  EntryHeader,
  EntryTxt,
} from "./ChartCardStyles";

const ChartCard = ({ image, title, rating }) => {
  return (
    <Chart>
      <EntryImg src={image} alt="Entry Image" />
      <EntryInfo>
        <EntryHeader>{title}</EntryHeader>
        <EntryTxt>{rating}</EntryTxt>
      </EntryInfo>
    </Chart>
  );
};

export default ChartCard;
