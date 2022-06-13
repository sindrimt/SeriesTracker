import React from "react";

import { Chart, EntryImg, EntryInfo, EntryHeader, EntryTxt, Counter, CounterOuter } from "./ChartCardStyles";

const ChartCard = ({ image, title, rating }) => {
  return (
    <Chart>
      <CounterOuter>
        <Counter> 1 </Counter>
      </CounterOuter>
      <EntryImg src={image} alt="Entry Image" />
      <EntryInfo>
        <EntryHeader>{title}</EntryHeader>
        <EntryTxt>{rating}</EntryTxt>
      </EntryInfo>
    </Chart>
  );
};

export default ChartCard;
