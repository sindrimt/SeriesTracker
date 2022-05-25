import styled from "styled-components";

export const NavbarOuter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  font-family: "Anek Malayalam", sans-serif;
  font-weight: 300;
`;

export const NavbarLine = styled.div`
  position: absolute;
  top: 130px;
  border-top: 1.5px solid rgba(137, 137, 137, 0.15);
  left: 5%;
  width: 90vw;
`;

export const Logo = styled.img`
  width: 200px;
  padding-left: 30px;
`;

export const NavbarProfileOuter = styled.div`
  display: flex;
  width: 300px;
  height: 70px;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.6);
  align-items: center;
`;

export const NavbarProfileImg = styled.img`
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  margin: 0px 10px 0px 10px;
`;
