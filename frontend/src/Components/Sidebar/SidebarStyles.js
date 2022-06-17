import styled from "styled-components";

export const SidebarOuter = styled.div`
  position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
  background-color: ${(props) => props.theme.sidebar.background};
  margin-top: ${(props) => (props.isFixed ? "73px" : "111px")};
  font-family: "Anek Malayalam", sans-serif;
  font-weight: 300;
  width: 230px;
  height: 100%;
  font-size: 18px;
  padding: 40px 0 0 0;
  white-space: nowrap;
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;

  @media (max-width: 638px) {
    display: none;
  }
`;

export const SearchOuter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 20px;
  font-size: 16px;
  background-color: ${(props) => props.theme.sidebar.search};
  color: ${(props) => props.theme.white};
`;

export const SidebarLine = styled.div`
  position: relative;
  border-top: 1.5px solid rgba(137, 137, 137, 0.15);
  width: 80%;
  align-self: center;
`;

export const PanelOuter = styled.div`
  width: 100%;
  display: grid;
  margin-top: 10px;
  grid-template-rows: repeat(5, 50px);
  grid-row-gap: 20px;
`;

export const SidebarBottomLine = styled.div`
  position: absolute;
  border-top: 1.5px solid rgba(137, 137, 137, 0.15);
  width: 100%;
  align-self: center;
  bottom: 100px;
`;

export const Trademark = styled.div`
  position: absolute;
  bottom: 18%;
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  left: 6%;
  color: ${(props) => props.theme.white};

  &:before {
    content: "";
    position: absolute;

    border-top: 1.5px solid rgba(137, 137, 137, 0.8);
    width: 100%;
    top: -10px;
  }
`;
