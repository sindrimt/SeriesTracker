import styled from "styled-components";

export const LoginOuterContainer = styled.div``;

export const LoginPreviewOuter = styled.div`
  position: absolute;
  left: 6%;
  width: 40%;
  height: 500px;
  @media (min-width: 850px) {
    &:after {
      content: "";
      position: absolute;
      height: calc(30vw + 15%);
      border: 1px solid rgba(0, 0, 0, 0.2);
      margin-left: 70px;
      top: 80px;
      border-radius: 5px;
    }
  }

  @media (max-width: 850px) {
    width: calc(70%);
    left: 14%;
  }
`;
export const TxtOuter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: flex-end;
`;

export const LoginPreviewHeader = styled.div`
  font-size: calc(1.2vw + 5px);
  color: #a63fcb;
  margin-bottom: 3px;

  @media (max-width: 850px) {
    font-size: calc(1.8vw + 5px);
  }
`;

export const LoginPreviewTxt = styled.div`
  font-size: calc(0.8vw + 5px);
  width: 70%;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 200;
  color: #393939;

  @media (max-width: 850px) {
    font-size: calc(1.2vw + 5px);
  }
`;

export const LoginPreviewImg = styled.img`
  width: 100%;
  object-fit: fill;
  border-radius: 3px;
  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
`;

export const LoginBoxOuter = styled.div`
  position: absolute;
  top: 4%;
  right: 8%;
  width: 400px;
  height: 520px;
  background-color: gray;
`;

export const LoginBoxMain = styled.div``;

export const LoginBoxLogo = styled.div``;

export const LoginFields = styled.div``;

export const LoginButton = styled.div``;

export const LoginForgot = styled.div``;

export const LoginBoxLine = styled.div``;

export const LoginBoxGoogle = styled.div``;

export const LoginBoxSecondary = styled.div``;
