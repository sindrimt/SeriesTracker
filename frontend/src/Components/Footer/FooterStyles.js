import styled from "styled-components";

export const FooterOuter = styled.div`
  display: flex;
  column-gap: 5rem;
  width: 100%;
  height: 140px;
  padding-right: 10px;
`;

export const FooterLogoContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 200px;
  }
`;

export const Logo = styled.img`
  //height: 55px;
  //width: 250px;
  width: 80%;
  margin-left: 5vw;
  margin-top: -35px;

  @media (max-width: 1000px) {
    width: 150px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LogoTxt = styled.div`
  margin-left: 6vw;
  font-size: 14px;
  font-weight: 200;
  color: #6f6c90;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
`;

export const InfoHeader = styled.div`
  font-weight: bold;
  margin: 10px 0 15px 0;
`;

export const InfoTxt = styled.div`
  font-size: 14px;
  line-height: 28px;
  color: #6f6c90;
  border-bottom: 1px solid rgba(166, 63, 203, 0);
  width: calc(100% - 80px);

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid rgba(166, 63, 203, 1);
    color: black;
  }
`;
