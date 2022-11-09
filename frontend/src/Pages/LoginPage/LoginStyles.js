import styled from "styled-components";

export const PageContainer = styled.div`
    position: absolute;
    width: 100%;
    background: linear-gradient(45deg, rgba(110, 68, 253, 0.8), rgba(166, 63, 203, 0.9));
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginOuterContainer = styled.div`
    width: calc(100% - 60px);
    border-radius: 10px;
    background-color: white;
    display: grid;
    height: calc(100% - 60px);
    grid-template-columns: 4.5fr 3fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 1250px) {
        grid-template-columns: 1fr;
        grid-row-gap: 0px;
    }
`;

export const LoginPreviewOuter = styled.div`
    justify-self: center;
    align-self: center;
`;

export const TxtOuter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const LoginPreviewHeader = styled.div`
    font-size: 30px;
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

    @media (max-width: 1250px) {
        width: 90%;
    }
`;

export const LoginPreviewImg = styled.img`
    width: 45vw;
    object-fit: fill;
    border-radius: 3px;
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 1250px) {
        display: none;
    }
`;

export const LoginBoxOuterBg = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 0 10px 10px 0;
`;

export const LoginBoxOuter = styled.div`
    display: grid;
    grid-row-gap: 20px;
    width: 80%;
    height: 80%;
    margin: auto;
`;
export const LoginBoxMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    padding-bottom: 20px;
    background-color: white;

    @media (max-width: 1250px) {
        width: 340px;
    }
`;

export const LoginBoxSecondary = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 1250px) {
        width: 340px;
    }
`;

export const LoginBoxLogo = styled.img`
    width: 260px;
`;
export const LoginBoxLogoOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const LoginFields = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width: 60%;
    grid-row-gap: 10px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
