import styled from "styled-components";

export const SeriesCardOuter = styled.div`
    width: 100%;
    padding: ${(props) => (props.showProgress ? " 10px 10px 10px 10px" : " 10px 10px 10px 10px")};
    height: 130px;
    box-shadow: "";
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

        .delete {
            visibility: visible;
        }
    }

    @media (max-width: 640px) {
        width: 96.5vw;
        height: 115px;
    }
`;

/* background-color: #F7F7F7;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='284' height='284' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23FEDBFF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C2B4C5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
 */
export const SeriesCardInner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;

    /* background-color: #fdfd77; */
    .delete {
        visibility: hidden;
        margin-left: 10px;
        //fill: ${(props) => props.theme.homepageCard.deleteBtn};

        &:hover {
            //fill: ${(props) => props.theme.homepageCard.deleteBtnHover};
            fill: rgb(220, 0, 0);
        }
    }
`;

export const SeriesCardImageContainer = styled.div`
    @media (max-width: 640px) {
        width: 80px;
        height: 100%;
        object-fit: cover;
        border-radius: 2px;
    }
`;

export const SeriesCardImage = styled.img`
    width: 130px;
    height: 100%;
    object-fit: cover;

    @media (max-width: 640px) {
        width: 80px;
        height: 100%;
        object-fit: fill;
        border-radius: 2px;
    }
`;

export const WatchTimeContainer = styled.div`
    position: relative;
    bottom: 5px;
    width: 100%;
    height: 20px;
    /* background-color: red; */
`;

export const CardInformationContainer = styled.div`
    margin-left: 20px;
    width: 60%;
    /* background-color: #00ff00; */
`;

export const CardTitle = styled.div`
    position: relative;
    font-size: 26px;
    font-weight: 300;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 640px) {
        font-size: 22px;
    }
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
    font-size: 24px;
    left: 0;

    .plus {
        border-radius: 50%;
        //background-color: #f7f7f7;

        &:hover {
            color: grey;
        }
    }

    .minus {
        border-radius: 50%;
        margin-left: 10px;
        //background-color: #f7f7f7;

        &:hover {
            color: grey;
        }
    }
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
