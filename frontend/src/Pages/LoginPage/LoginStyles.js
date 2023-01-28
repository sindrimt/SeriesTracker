import styled, { keyframes } from "styled-components";
//import largepanel from "../../Assets/Login/largepanel.png";
import largepanel from "../../Assets/Login/largepanel-min.png";

export const PageContainer = styled.div`
    position: absolute;
    width: 100vw;
    background-image: url(${largepanel});
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animate 25s infinite;
    animation-timing-function: linear;

    @keyframes animate {
        100% {
            background-position: 600px 600px;
        }
    }
`;

export const LoginOuterContainer = styled.div`
    width: calc(100% - 60px);
    border-radius: 10px;
    background-color: white;
    height: calc(100% - 60px);
    background-color: lightgreen;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }
`;

export const HomepagePreview = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
    background-color: lightblue;
    margin: auto;

    //If less than 600px, the preview should dissappear
    //and only the login box should be visible
    @media (max-width: 600px) {
        display: none;
    }
`;

export const TxtOuter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const HomepagePreviewHeader = styled.div`
    font-size: 30px;
    color: #a63fcb;
    margin-bottom: 3px;
`;

export const HomepagePreviewTxt = styled.div`
    font-size: 18px;
    width: 70%;
    text-align: center;
    margin-bottom: 7px;
    font-weight: 200;
    color: #393939;

    @media (max-width: 1250px) {
        width: 90%;
    }
`;

export const HomepagePreviewImg = styled.img`
    width: 45vw;
    object-fit: fill;
    border-radius: 3px;
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 900px) {
        display: none;
    }

    //Centers the image in the left grid-column
    margin: auto;
`;

export const LoginBoxOuterBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: papayawhip;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 0 10px 10px 0;
    //Takes up the whole screen if the screen is less than 600px
    @media (max-width: 600px) {
        border-radius: 10px;
    }
`;

export const LoginBoxContainer = styled.div`
    width: 90%;
    height: 90%;
    margin: auto;
    border-radius: 10px;
    background-color: #d5d5d5;
    @media (max-width: 600px) {
        height: 95%;
    }
`;

//Grid containing the logo and the login fields
export const LoginBoxMain = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr;
`;

export const LoginBoxSecondary = styled.div`
    width: 100%;
`;

export const LoginBoxLogo = styled.img`
    width: 250px;
    padding-top: 10px;
    //set static logo size if the screen is less than 600px
    @media (max-width: 700px) {
        width: 200px;
    }
    @media (max-width: 350px) {
        width: 170px;
    }
    @media (max-width: 250px) {
        width: 90%;
    }
`;
export const LoginBoxLogoOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LoginFields = styled.div`
    display: grid;
    grid-template-columns: repeat(auto);
    width: 100%;
    height: 100%;
    grid-row-gap: 20px;
    background-color: #ffffff;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 5%;
    padding-left: 5%;
    border-radius: 20px 20px 10px 10px;
`;

export const RegisterText = styled.span`
    border-bottom: 1px solid #a63fcb;
    margin-left: 5px;

    &:hover {
        cursor: pointer;
        color: rgba(166, 63, 203, 0.6);
    }
`;

export const AlternativeLoginMethods = styled.div`
    padding: 30px 0 30px 0;
    width: 60%;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(137, 137, 137, 0.2);
`;

export const FileLabel = styled.label`
    cursor: pointer;
`;

export const LoginForgot = styled.div``;

export const LoginBoxLine = styled.div``;

export const LoginBoxGoogle = styled.div``;
