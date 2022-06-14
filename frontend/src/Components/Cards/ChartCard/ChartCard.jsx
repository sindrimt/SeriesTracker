import React from "react";

import { Chart, EntryImg, EntryInfo, EntryHeader, EntryTxt, Counter, CounterOuter } from "./ChartCardStyles";

const ChartCard = ({ image, title, rating, number }) => {
  return (
    <Chart>
      <CounterOuter>
        <Counter> {number + 2} </Counter>
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
