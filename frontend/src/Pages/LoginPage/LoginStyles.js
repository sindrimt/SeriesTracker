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
    background-color: #e7e7e7;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: 1s;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 2fr;
    }

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
    background-color: #e7e7e7;
    margin: auto;
    padding-bottom: 10px;
    border-radius: 10px 0px 0px 10px;

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
    padding: 0px 20px 0px 20px;
    margin: auto;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const HomepagePreviewHeader = styled.div`
    font-size: 30px;
    color: #a63fcb;
    text-align: center;
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
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media (max-width: 800px) {
        display: none;
    }

    //Centers the image in the left grid-column
    margin: auto;
`;

export const LoginBoxOuterBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: #a7a6ba;
    //#c4c3d0 lighter gray-purple
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
    background-color: #e7e7e7;
    @media (max-width: 600px) {
        height: 95%;
        width: 95%;
    }
`;

//Grid containing the logo and the login fields
export const LoginBoxMain = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 5fr;
`;

export const LoginBoxSecondary = styled.div`
    width: 100%;
`;

export const LoginBoxLogo = styled.img`
    width: 200px;
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
    grid-row-gap: 5px;
    background-color: #ffffff;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 20px;
    padding-right: 10%;
    padding-left: 10%;
    border-radius: 20px 20px 10px 10px;
`;

export const RegisterBox = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
    text-align: center;
`;

export const RegisterText = styled.span`
    margin: 0px 10px 0px 10px;
    &:nth-child(2) {
        color: #a63fcb;
        font-weight: 400;
        font-size: 1.1rem;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const AlternativeText = styled.div`
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
`;

export const AlternativeLoginMethods = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

export const FileLabel = styled.label`
    cursor: pointer;
`;

export const LoginForgot = styled.div``;

export const LoginBoxLine = styled.div``;

export const LoginBoxGoogle = styled.div``;
