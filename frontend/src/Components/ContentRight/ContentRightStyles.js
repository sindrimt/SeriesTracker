import styled from "styled-components";

export const ContentRightOuter = styled.div`
    position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
    margin-top: ${(props) => (props.isFixed ? "110px" : "155px")};
    width: 27%;
    height: 85vh;
    right: 1.3%;
    overflow-y: scroll;

    @media (max-width: 1060px) {
        display: none;
    }

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
`;

export const ChartsContainer = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 200px repeat(minmax(100px, 100px));
    background-color: ${(props) => props.theme.contentRight.backgroundColor};
`;
export const TopAnimeOuter = styled.div`
    width: 100%;
    height: 200px;
    transition: 0.2s ease-in-out;
    &:after {
        box-shadow: inset 0px -25px 50px 5px black;
        content: "";
        display: block;
        height: 200.2px;
        position: absolute;
        top: 0px;
        width: 100%;
    }

    &:hover {
        //cursor: pointer;
        &:after {
            box-shadow: inset 0px -25px 60px 5px black;
            content: "";
            display: block;
            height: 200.2px;
            position: absolute;
            top: 0px;
            width: 100%;
        }
    }
`;

export const TopAnimeImage = styled.img`
    filter: brightness(80%);
    position: relative;
    padding: 0px 0 0px 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ImageInformation = styled.div`
    display: flex;
    z-index: 9999999;
    position: relative;
    width: 55%;
    height: 50px;
    bottom: 64px;
    left: 8px;
`;

export const ImageHeader = styled.div`
    position: relative;
    font-size: 20px;
    color: white;
    font-weight: 400;
    left: 10%;
    letter-spacing: 0.15rem;
    top: 3px;
`;

export const ImageRating = styled.div`
    position: absolute;
    font-size: 14px;
    color: white;
    font-weight: 300;
    left: 62px;
    letter-spacing: 0.15rem;
    top: 30px;
`;

export const ImageNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 50%;
    left: 13%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: white;

    color: black;
    font-size: 22px;
    font-weight: 600;
`;
