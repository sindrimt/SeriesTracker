import styled from "styled-components";

export const ContentRightOuter = styled.div`
  position: absolute;
  margin: 145px 0px 0px 0px;
  width: 22%;
  height: 89%;
  right: 30px;
  @media (max-width: 1000px) {
    display: none;
  }
  /*   &:hover {
    -ms-overflow-style: none;
    scrollbar-width: none;

    overflow-x: none;
    overflow-y: overlay;

    ::-webkit-scrollbar {
      display: none;
    }
  } */
`;

export const ChartsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }

  &:nth-child(even) {
    background-color: ${(props) => props.theme.homepageCard.background};
    color: ${(props) => props.theme.chartCard.fontColor};
    //border: 1px solid black;
  }
  &:nth-child(odd) {
    color: ${(props) => props.theme.currentTheme === "spillTheme" && props.theme.chartCard.fontColor2};
    //border: 1px solid black;
  }

  /* &:nth-child(odd) {
    border: 1px solid black;
  } */

  @media (max-width: 1500px) {
    background-color: none;
  }
`;

export const EntryImg = styled.img`
  display: flex;
  flex-grow: 1;
  @media (max-width: 1700px) {
    width: 50%;
  }
`;

export const EntryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 5;
`;

export const EntryHeader = styled.div`
  display: flex;
  flex-grow: 1;
  font-weight: 400;
  font-size: 20px;
  padding: 10px;

  @media (max-width: 1400px) {
    font-size: 18px;
    padding: 5px;
  }
`;

export const EntryTxt = styled.div`
  display: flex;
  flex-grow: 10;
  padding: 10px;

  @media (max-width: 1400px) {
    padding: 5px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
