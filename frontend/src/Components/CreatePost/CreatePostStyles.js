import styled from "styled-components";

export const CreatePostOuter = styled.div`
  position: absolute;
  justify-content: center;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 500vh;
  padding-top: 180px;

  background: ${(props) =>
    props.theme.currentTheme === "spillTheme" &&
    `repeating-linear-gradient(-65deg,${props.theme.blue} 0 30px,${props.theme.lightblue} 25px 60px)`};

  @media (max-width: 1100px) {
    height: 1000vh;
  }

  @media (min-width: 1600px) {
    height: 300vh;
  }
`;

export const Gridcontainer = styled.div`
  position: relative;
  padding: 10px;
  width: 70%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 1rem;
  column-gap: 2rem;
`;

export const SearchOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
  width: 400px;
  height: 70px;
  top: ${(props) => (props.isFixed ? "100px" : "130px")};
  background-color: ${(props) => (props.isFixed ? props.theme.animeCard.background : "")};
  z-index: 10000000000000;
`;
