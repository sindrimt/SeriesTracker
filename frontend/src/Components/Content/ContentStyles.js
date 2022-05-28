import styled from "styled-components";

/**
 *
 *  Content / Grid-Container
 *
 */

export const ContentContainerOuter = styled.div`
  float: left;
  margin: 165px 0px 0px 0px;
  padding-left: 260px;
  width: 70%;
`;

export const ContentContainerGrid = styled.div`
  margin-top: 10px;
  display: grid;
  row-gap: 1rem;
`;

export const ContentContainerGridIcons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 1rem;
`;

/**
 *
 *  Header stuff
 *
 */
export const PickUp = styled.div`
  display: flex;
  width: 100%;
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

  &:hover {
    cursor: pointer;
  }
`;
