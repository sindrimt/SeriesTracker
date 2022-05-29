import React from "react";
import { 
  ContentRightOuter,
  ChartsContainer,
  Chart,
  EntryImg,
  EntryInfo,
  EntryHeader,
  EntryTxt,

} from "./ContentRightStyles";

import deathnote from "../../Assets/ContentRight/DeathNote.jpg";
import fmab from "../../Assets/ContentRight/FMAB.jpg";
import onepiece from "../../Assets/ContentRight/OnePiece.jpg";
import onepunchman from "../../Assets/ContentRight/OnePunchMan.jpg";
import steinsgate from "../../Assets/ContentRight/SteinsGate.jpg";

const ContentRight = () => {
  return (
  <ContentRightOuter>
    <ChartsContainer>
      <Chart>
        <EntryImg src={onepiece} alt="Entry Image"/>
        <EntryInfo>
          <EntryHeader>One Piece</EntryHeader>
          <EntryTxt>Chopper is da best</EntryTxt>
        </EntryInfo>
      </Chart>
      <Chart>
        <EntryImg src={fmab} alt="Entry Image"/>
        <EntryInfo>
          <EntryHeader>FMA:B</EntryHeader>
          <EntryTxt>Chopper is da best</EntryTxt>
        </EntryInfo>
      </Chart>
      <Chart>
        <EntryImg src={deathnote} alt="Entry Image"/>
        <EntryInfo>
          <EntryHeader>Death Note</EntryHeader>
          <EntryTxt>L</EntryTxt>
        </EntryInfo>
      </Chart>
      <Chart>
        <EntryImg src={steinsgate} alt="Entry Image"/>
        <EntryInfo>
          <EntryHeader>Steins;Gate</EntryHeader>
          <EntryTxt>Banana</EntryTxt>
        </EntryInfo>
      </Chart>
      <Chart>
        <EntryImg src={onepunchman} alt="Entry Image"/>
        <EntryInfo>
          <EntryHeader>One Punch Man</EntryHeader>
          <EntryTxt>He do be punching</EntryTxt>
        </EntryInfo>
      </Chart>
      
    </ChartsContainer>
  </ContentRightOuter>
  
  );
};

export default ContentRight;
