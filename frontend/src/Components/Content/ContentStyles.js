import styled from "styled-components";

/**
 *
 *  Content / Grid-Container
 *
 */

export const ContentContainerOuter = styled.div`
  float: left;
  margin: 140px 0px 0px 0px;
  padding-left: 280px;
  width: 70%;

  @media (max-width: 640px) {
    padding-left: 30px;
  }

  @media (max-width: 1060px) {
    width: 98%;
  }
`;

export const ContentContainerGrid = styled.div`
  margin-top: 10px;
  display: grid;
  row-gap: 1rem;
  padding-bottom: 10px;
`;

export const ContentContainerGridIcons = styled.div`
  margin-top: 10px;
  display: grid;
  column-gap: 1rem;
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
  color: ${(props) => props.theme.navbar.fontColor2};
`;

export const Filter = styled.img`
  margin-left: 20px;
  width: 20px;
  color: ${(props) => props.theme.content.filter};
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
