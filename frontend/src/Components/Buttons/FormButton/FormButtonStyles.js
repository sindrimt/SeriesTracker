import styled from "styled-components";

export const FButton = styled.div`
    width: 100%;
    height: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(178.54deg, #a63fcb 1.24%, rgba(166, 63, 203, 0) 342.56%);
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));
    border-radius: 20px;
    font-weight: 400;
    font-size: 1.2rem;

    &:hover {
        cursor: pointer;
        background: linear-gradient(178.54deg, rgba(166, 63, 203, 0.9) 1.24%, rgba(166, 63, 203, 0) 342.56%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));
    }

    @media (min-height: 650px) {
        min-height: 50%;
    }
`;
