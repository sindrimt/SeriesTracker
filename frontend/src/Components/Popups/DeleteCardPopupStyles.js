import styled from "styled-components";

export const DeletePopupOuter = styled.div`
    position: absolute;
    height: 160px;
    width: 350px;
    background-color: ${(props) => props.theme.popup.body};
    top: 250px;
    left: calc(50vw - 175px);
    z-index: 99999999;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
    display: grid;
    grid-template-rows: 3fr 1fr;
`;

export const DeletePopupText = styled.div`
    font-size: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DeletePopupOptionsContainers = styled.div`
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DeletePopupYesContainer = styled.div`
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
        cursor: pointer;        
        border-bottom-left-radius: 10px;
        background-color: rgba(166, 63, 203, 0.2);

    }
`;

export const DeletePopupNoContainer = styled.div`
    height: 100%;
    &:hover {
        cursor: pointer;
        border-bottom-right-radius: 10px;
        background-color: rgba(166, 63, 203, 0.2);
    }
`;

export const DeleteOptionsText = styled.div`
    font-size: 20px;
`;