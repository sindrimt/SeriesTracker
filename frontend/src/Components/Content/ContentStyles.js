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
    color: ${(props) => props.theme.navbar.fontColor2};

    .pickupSpan {
        @media (max-width: 1060px) {
            display: none;
        }
    }
`;

export const Filter = styled.img`
    margin-left: 10px;
    width: 20px;
    color: ${(props) => props.theme.content.filter};
`;

export const Icon = styled.img`
    width: 25px;
    margin-left: 20px;
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
    border-bottom: 1.5px solid ${(props) => props.theme.content.searchBorder};
    text-overflow: ellipsis;
    margin-left: 5px;

    &:focus {
        outline: none;
    }

    &:focus::placeholder {
        color: transparent;
    }
`;

export const SearchOuterContainer = styled.div`
    display: flex;
    width: 37%;
`;
