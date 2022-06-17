import styled from "styled-components";

export const PanelItem = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 0 20px;
  align-items: center;
  transition: 0.15s;

  &:hover {
    background-color: lightgoldenrodyellow;
    color: black;
    cursor: pointer;
  }

  /* &:nth-child(even) {
    background-color: ${(props) => props.theme.sidebar.accentColor};
  } */
`;

export const Text = styled.div`
  column-gap: 20px;
  padding: 0 15px 0 0;
  top: 6px;
`;

export const Icon = styled.img`
  column-gap: 20px;
  padding: 0 15px 0 0;
  top: 6px;
  width: 37px;
`;
