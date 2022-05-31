import styled from "styled-components";

export const ButtonOuter = styled.div`
  width: 100px;
  height: 100px;
  background-color: #a63fcb;
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  z-index: 99;

  &:hover {
    cursor: pointer;
  }
`;
