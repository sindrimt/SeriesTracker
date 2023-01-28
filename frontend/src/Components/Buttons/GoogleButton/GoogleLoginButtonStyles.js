import styled from "styled-components";

export const GoogleButtonOuter = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: fit-content;
    height: 40px;
    border-radius: 2px;
    white-space: nowrap;
    background-color: rgb(252, 252, 252);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 3px;

    &:hover {
        transition: 0.1s ease-in-out;
        cursor: pointer;
        background-color: rgb(245, 245, 245);
    }
    @media (max-width: 100px) {
        width: 90%;
    }
`;

export const GoogleIcon = styled.img`
    width: 25px;
    height: 25px;
`;
export const Text = styled.span`
    margin-left: 12px;
    font-weight: 300;
    font-size: 15px;
    color: #757575;
    @media (max-width: 250px) {
        display: none;
    }
`;
