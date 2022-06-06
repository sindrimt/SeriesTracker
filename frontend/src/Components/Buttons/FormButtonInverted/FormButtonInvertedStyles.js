import styled from "styled-components";

export const FButtonInverted = styled.div`
    width: 100%;
    height: 35px;
    color: #A63FCB;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(178.54deg, rgba(166, 63, 203, 0.05) 1.24%, rgba(166, 63, 203, 0) 342.56%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));
    border-radius: 10px;
    border: 1px lightgray solid;

    &:hover {
        cursor: pointer;
        background: linear-gradient(178.54deg, rgba(166, 63, 203, 0.2) 1.24%, rgba(166, 63, 203, 0) 342.56%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));
    }  
`;