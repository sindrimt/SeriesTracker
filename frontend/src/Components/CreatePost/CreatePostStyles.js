import styled from "styled-components";

export const CreatePostOuter = styled.div`
  position: absolute;
  justify-content: center;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 180px;
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
  background-color: red;
`;

export const SearchOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 400px;
  height: 50px;
  top: -50px;
`;
