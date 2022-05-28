import styled from "styled-components";

/**
 *
 *  Content / Grid-Container
 *
 */

export const ContentContainerOuter = styled.div`
  position: relative;
  float: left;
  margin: 185px 0px 0px 0px;
  width: 100%;

  @media (max-width: 1400px) {
    margin-left: 30px;
  }
`;

export const ContentContainerGrid = styled.div`
  float: left;
  margin-top: 10px;
  display: grid;
  padding-left: 0px;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  row-gap: 1rem;
  width: 66%;

  @media (max-width: 980px) {
    width: 95%;
  }
`;

/**
 *
 *  Header stuff
 *
 */
export const PickUp = styled.div`
  display: flex;
  width: 66%;
  font-size: 24px;
  font-weight: 300;
  white-space: nowrap;
  align-items: center;
`;

export const Filter = styled.img`
  margin-left: 20px;
  width: 20px;
`;

export const Icon = styled.img`
  width: 25px;
  margin-left: 20px;
`;

export const GridTypeIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
  margin-right: 40px;
`;
