import styled from "styled-components";

/**
 *
 *  Content / Grid-Container
 *
 */

export const ContentContainerOuter = styled.div`
    float: left;
    margin: 120px 0px 0px 0px;
    padding-left: 250px;
    width: 70%;
    min-height: 100vh;

    @media (max-width: 720px) {
        padding-left: 5vw;
        margin-top: 100px;
    }

    @media (max-width: 1060px) {
        width: 98%;
    }
`;

export const ContentContainerGrid = styled.div`
    margin-top: 10px;
    display: grid;
    row-gap: 1rem;
    padding-bottom: 10px;

    @media (max-width: 720px) {
        row-gap: 0.5rem;
    }
`;

export const ContentContainerGridIcons = styled.div`
    margin-top: 10px;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 1rem;
`;

/**
 *
 *  Header stuff
 *
 */
export const PickUp = styled.div`
    display: flex;
    width: 100%;
    font-size: 24px;
    font-weight: 300;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.content.pickUpColor};

    .pickupSpan {
        @media (max-width: 1100px) {
            display: none;
        }
    }
`;

export const Filter = styled.img`
    margin-left: 10px;
    width: 20px;
    color: ${(props) => props.theme.content.filter};
`;

export const Icon = styled.div`
    width: 25px;
    margin-left: 10px;
`;

export const GridTypeIcons = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;

    height: 30px;
    margin-right: 25px;

    &:hover {
        cursor: pointer;
    }
`;

export const SearchOuter = styled.input`
    border-radius: 0px;
    position: relative;
    display: flex;
    background-color: transparent;
    height: 35px;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    color: ${(props) => props.theme.search.fontColor};
    text-decoration: none;
    border: none;
    border-bottom: 1.5px solid rgb(170, 170, 170);
    text-overflow: ellipsis;
    margin-left: 5px;
    transition: 0.2s ease-in-out;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.content.searchBorder};
    }

    &:focus::placeholder {
        color: transparent;
    }

    &:hover {
        border-color: ${(props) => props.theme.cardFontSecondary};
    }
`;

export const SearchOuterContainer = styled.div`
    display: flex;
    width: 40%;

    @media (max-width: 850px) {
        width: 50%;
    }

    @media (max-width: 450px) {
        width: 55%;
    }
`;

export const PaginationContainer = styled.div`
    width: fit-content;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px;
    background-color: ${(props) => props.theme.cardBG};
`;

export const SubmitButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    //background-color: rgb(20, 250, 250);
    border-radius: 50%;
    border: 1.8px solid #a63fcb;
    animation: pulse 1.5s infinite;

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(166, 63, 203, 0.5);
        }
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(166, 63, 203, 0);
        }
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(166, 63, 203, 0);
        }
    }

    &:hover {
        cursor: pointer;
        background-color: rgb(240, 240, 240);
    }
`;

export const ButtonContainer = styled.div`
    display: ${(props) => (props.show ? "show" : "none")};
    width: fit-content;
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const Placeholder = styled.div`
    @media (min-width: 721px) {
        display: none;
    }
`;
