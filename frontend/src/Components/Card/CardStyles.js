import styled from "styled-components";

export const SeriesCardOuter = styled.div`
  width: 97%;
  padding: 20px 20px 25px 20px;
  height: 180px;
  /* background-color: #fcfcfc; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const SeriesCardInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  /* background-color: #fdfd77; */
`;

export const SeriesCardImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
`;

export const WatchTimeContainer = styled.div`
  position: relative;
  bottom: 5px;
  width: 100%;
  height: 20px;
  /* background-color: red; */
`;

export const CardInformationContainer = styled.div`
  margin-left: 20px;
  width: 60%;
  /* background-color: #00ff00; */
`;

export const CardRating = styled.div`
  background-color: #0000ff;
  width: 20%;
`;

export const CardTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

export const EpisodeContainer = styled.div`
  margin-top: 10px;
  width: 160px;
`;

export const EpisodeCount = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

export const EpisodeLineGray = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: rgba(201, 201, 201, 0.8);
  border-radius: 5px;
`;

export const EpisodeLineProgress = styled.div`
  position: relative;
  width: 60%;
  height: 2px;
  background-color: #a63fcb;
  border-radius: 5px;
  top: -2px;
`;
