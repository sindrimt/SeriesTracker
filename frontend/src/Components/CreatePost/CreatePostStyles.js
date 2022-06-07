import styled from "styled-components";

export const CreatePostOuter = styled.div`
  position: absolute;
  justify-content: center;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 80%;
  margin-top: 180px;

`;

export const Gridcontainer = styled.div`
  padding: 10px;
  width: 70%;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  row-gap: 1rem;
  column-gap: 2rem;
`;
