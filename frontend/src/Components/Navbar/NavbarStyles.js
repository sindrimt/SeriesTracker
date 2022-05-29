import styled from "styled-components";

export const NavbarOuter = styled.div`
  background-color: ${(props) => (props.showBgColor ? "white" : "")};
  transition: 0.25s ease-in-out;
  position: fixed;
  z-index: 100000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  font-family: "Anek Malayalam", sans-serif;
  font-weight: 300;
`;

export const NavbarLine = styled.div`
  position: absolute;
  transition: 0.3s ease;
  top: 110px;
  border-radius: 5px;
  left: 5%;
  width: 90vw;
  border-top: ${(props) =>
    props.showLine ? "1.5px solid rgba(137, 137, 137, 0)" : "1.5px solid rgba(137, 137, 137, 0.15)"};
`;

export const Logo = styled.img`
  width: 240px;
  padding-left: 30px;
  padding-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const WelcomeBack = styled.span`
  white-space: nowrap;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarProfileOuter = styled.div`
  display: flex;
  height: 70px;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: flex-end;

  div,
  span {
    border-bottom: 1px solid rgba(166, 63, 203, 0);
    transition: 0.1s;
  }

  & .signout:hover {
    border-bottom: 1px solid rgba(166, 63, 203, 1);
    cursor: pointer;
  }
`;

export const NavbarProfileImg = styled.img`
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  width: 40px;
  margin: 0px 10px 0px 10px;
`;

export const NavbarLinksOuter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-weight: 300;
  font-size: 18px;
  white-space: nowrap;

  div {
    border-bottom: 1px solid rgba(166, 63, 203, 0);
    transition: 0.1s;
  }

  @media (max-width: 600px) {
    display: none;
  }

  div:hover {
    border-bottom: 1px solid rgba(166, 63, 203, 1);
    cursor: pointer;
  }
`;
