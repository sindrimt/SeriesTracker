import styled from "styled-components";

export const SeriesCardOuter = styled.div`
    width: 100%;
    height: 110px;
    padding: 10px;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(100, 100, 100, 0.1);
    background-color: #fcfcfc;
    transition: 0.1s ease;
    border-radius: 3px;
    color: ${(props) => props.theme.homepageCard.fontColor};
    background-color: ${(props) => props.theme.homepageCard.background};
    border: 1.5px solid ${(props) => props.theme.homepageCard.border};

    &:hover {
        //background-color: rgba(166, 63, 203, 0.1);
        background-color: ${(props) => props.theme.lightgrey};
        cursor: pointer;
    }
`;

export const SeriesCardInner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    /* background-color: #fdfd77; */
`;

export const SeriesCardImage = styled.img`
    width: 100px;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
`;

export const WatchTimeContainer = styled.div`
    position: relative;
    bottom: 5px;
    width: 100%;
    height: 20px;
    /* background-color: red; */
`;

export const CardInformationContainer = styled.div`
    margin-left: 18px;
    width: 60%;
    /* background-color: #00ff00; */
`;

export const CardTitle = styled.div`
    font-size: 22px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const EpisodeContainer = styled.div`
    margin-top: ${(props) => (props.hasWatchTime ? "2px" : "9px")};
    width: 160px;
`;

export const EpisodeCount = styled.div`
    font-size: 14px;
    font-weight: 300;
`;

export const EpisodeLineGray = styled.div`
    position: relative;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.homepageCard.episodeLineRight};

    border-radius: 5px;
`;

export const EpisodeLineProgress = styled.div`
    position: relative;
    width: ${(props) => props.progress}%;
    height: 2px;
    background-color: ${(props) => props.theme.homepageCard.episodeLineLeft};
    border-radius: 5px;
    top: -2px;
`;

export const CardRatingContainer = styled.div`
    position: relative;
    display: flex;
    padding-left: 0px;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    width: 20%;
`;

export const CardRatingImg = styled.img`
    display: flex;
    width: 23px;
`;

export const CardRatingTxt = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    font-size: 16px;
`;

export const CardRatingCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100px;
`;

export const CardDescription = styled.div`
    margin-top: 5px;
    font-size: 16px;
    display: flex;
    left: 0;
`;

export const ProgressLine = styled.div`
    position: relative;
    width: ${(props) => props.progress - 11}%;
    height: 2px;
    background-color: #a63fcb;
    background-color: ${(props) => props.theme.homepageCard.ProgressLineLeft};
    bottom: 8px;
    border-radius: 999px;
    z-index: 999;
    margin-left: 11%;

    &:after {
        content: "";
        position: absolute;
        background-color: ${(props) => props.theme.homepageCard.ProgressLineLeft};
        width: 10px;
        height: 10px;
        right: 0px;
        margin-bottom: 5px;
        transform: translate(0px, -4px);
        border-radius: 50%;
    }
`;

export const ProgressLineGray = styled.div`
    position: relative;
    width: 89%;
    height: 2px;
    background-color: rgba(201, 201, 201, 0.8);
    background-color: ${(props) => props.theme.homepageCard.ProgressLineRight};
    bottom: 10px;
    border-radius: 999px;
    margin-left: 11%;
`;

export const ProgressLineText = styled.div`
    position: absolute;
    font-size: 11px;
    transform: translate(0px, -15px);
`;
