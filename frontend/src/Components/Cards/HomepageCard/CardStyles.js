import styled from "styled-components";

export const SeriesCardOuter = styled.div`
    width: 100%;
    padding: ${(props) => (props.showProgress ? " 10px 10px 10px 10px" : " 10px 10px 10px 10px")};
    height: 130px;
    box-shadow: 0px 4px 4px rgba(100, 100, 100, 0.1);
    background-color: #fcfcfc;
    transition: 0.1s ease;
    border-radius: 3px;
    color: ${(props) => props.theme.homepageCard.fontColor};
    background-color: ${(props) => props.theme.homepageCard.background};
    border: 1.5px solid ${(props) => props.theme.homepageCard.border};

    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='300' height='100' preserveAspectRatio='none' viewBox='0 0 300 100'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1105%26quot%3b)' fill='none'%3e%3cpath d='M94.34449662425591 51.314716655152196L104.57008342508908 37.24040385627676 80.27018382538047 41.089129854319026z' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M272.26 52.31 a21.52 21.52 0 1 0 43.04 0 a21.52 21.52 0 1 0 -43.04 0z' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M159.8950231662772 97.15467351042199L180.03509731165406 75.55708817934276 138.297437835198 77.01459936504514z' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M110.313%2c90.546C114.15%2c90.534%2c117.968%2c89.3%2c120.091%2c86.104C122.457%2c82.541%2c123.133%2c77.989%2c121.182%2c74.183C119.061%2c70.046%2c114.96%2c67.167%2c110.313%2c67.03C105.43%2c66.886%2c100.512%2c69.166%2c98.27%2c73.506C96.164%2c77.582%2c97.78%2c82.418%2c100.428%2c86.165C102.657%2c89.32%2c106.45%2c90.558%2c110.313%2c90.546' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M103.613%2c119.187C110.394%2c119.273%2c118.023%2c119.234%2c121.745%2c113.565C125.73%2c107.495%2c124.4%2c99.477%2c120.629%2c93.272C117.009%2c87.316%2c110.578%2c83.458%2c103.613%2c83.727C97.053%2c83.98%2c92.065%2c88.849%2c88.727%2c94.502C85.315%2c100.279%2c82.792%2c107.372%2c86.257%2c113.117C89.649%2c118.742%2c97.045%2c119.104%2c103.613%2c119.187' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M233.266%2c120.068C239.367%2c119.684%2c242.751%2c113.623%2c245.612%2c108.221C248.226%2c103.285%2c250.256%2c97.722%2c247.742%2c92.735C245%2c87.295%2c239.353%2c83.487%2c233.266%2c83.725C227.496%2c83.951%2c223.543%2c88.812%2c220.626%2c93.795C217.667%2c98.849%2c215.365%2c104.685%2c217.904%2c109.963C220.752%2c115.883%2c226.709%2c120.48%2c233.266%2c120.068' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M286.2311774919456 56.753987710520256L299.2436523752832 41.78484770497177 284.2745123697347 28.77237282163415 271.2620374863971 43.74151282718263z' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M179.978%2c102.59C183.888%2c102.662%2c188.243%2c102.155%2c190.248%2c98.797C192.286%2c95.382%2c190.813%2c91.204%2c188.833%2c87.755C186.842%2c84.287%2c183.976%2c80.989%2c179.978%2c80.906C175.868%2c80.82%2c172.442%2c83.771%2c170.461%2c87.373C168.557%2c90.835%2c168.245%2c95.082%2c170.34%2c98.432C172.328%2c101.611%2c176.229%2c102.521%2c179.978%2c102.59' fill='rgba(166%2c 63%2c 203%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1105'%3e%3crect width='300' height='100' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-size: contain; */

    background-color: #f7f7f7;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='284' height='284' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23FEDBFF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C2B4C5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");

    &:hover {
        //background-color: rgba(166, 63, 203, 0.1);
        background-color: ${(props) => props.theme.lightgrey};
        cursor: pointer;
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
`;

export const SeriesCardImage = styled.img`
    width: 150px;
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
    margin-left: 20px;
    width: 60%;
    /* background-color: #00ff00; */
`;

export const CardTitle = styled.div`
    font-size: 26px;
    font-weight: 300;
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
    padding-left: 70px;
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
        background-color: #f7f7f7;

        &:hover {
            color: grey;
        }
    }

    .minus {
        border-radius: 50%;
        margin-left: 10px;
        background-color: #f7f7f7;

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
