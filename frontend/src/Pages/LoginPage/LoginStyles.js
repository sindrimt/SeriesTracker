import styled from "styled-components";

export const LoginOuterContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-right: 2vw;
  padding-left: 2vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 100px;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0px;
  }
`;

export const LoginPreviewOuter = styled.div`
  justify-self: center;
  align-self: center;
  
  @media (min-width: 1250px) {
    
    &:after{
      content: "";
      position: absolute;
      height: 60%;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin-left: 5%;
      top: 130px;
      border-radius: 5px;
    }

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
  font-size: 24px;
  color: #a63fcb;
  margin-bottom: 3px;
`;

export const LoginPreviewTxt = styled.div`
  font-size: 18px;
  width: 70%;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 200;
  color: #393939;
`;

export const LoginPreviewImg = styled.img`
  width: 700px;
  object-fit: fill;
  border-radius: 3px;
  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
  
  @media (max-width: 1250px) {
    display: none;
  }
`;

export const LoginBoxOuter = styled.div`
  margin-top: 150px;
  display: grid;
  height: 500px;
  grid-template-rows: 8fr 2fr;
  grid-row-gap: 20px;
  justify-content: center;
  
  @media (max-width: 1250px) {
    margin-top: -30px;
  }
`
export const LoginBoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-self: center;
  width: 380px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  padding-bottom: 20px;
`;

export const LoginBoxSecondary = styled.div`
  display: flex;
  width: 380px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const LoginBoxLogo = styled.img`
  width: 260px;
  height: 60px;
`;
export const LoginBoxLogoOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const LoginFields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 60%;
  grid-row-gap: 10px;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-bottom: 20px;
`;

export const LoginButton = styled.div`
`;

export const LoginForgot = styled.div``;

export const LoginBoxLine = styled.div``;

export const LoginBoxGoogle = styled.div``;
