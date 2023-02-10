import styled from "styled-components";

export const CreatePostOuter = styled.div`
    position: absolute;
    width: calc(100% - 265px);
    display: flex;
    margin-left: 255px;
    row-gap: 20px;
    flex-direction: column;
    padding-top: 75px;
    padding-bottom: 20px;
    grid-template-columns: 1fr 1fr;

    background: ${(props) =>
        props.theme.currentTheme === "spillTheme" &&
        `repeating-linear-gradient(-65deg,${props.theme.blue} 0 30px,${props.theme.lightblue} 25px 60px)`};

    @media (max-width: 1100px) {
        height: 1000vh;
    }

    @media (min-width: 1600px) {
        height: 300vh;
    }
    @media (max-width: 720px) {
        margin-left: 20px;
        width: calc(100% - 20px);
    }
`;

export const Gridcontainer = styled.div`
    position: relative;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    row-gap: 1rem;
    column-gap: 2rem;
    padding-bottom: 20px;
`;

export const SearchOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${(props) => (props.isFixed ? "fixed" : "absolute")};
    width: 400px;
    height: 70px;
    top: ${(props) => (props.isFixed ? "100px" : "130px")};
    background-color: ${(props) => (props.isFixed ? props.theme.animeCard.background : "")};
    z-index: 10000000000000;
`;

export const DropDownOuter = styled.div`
    position: relative;
    width: 70px;
    height: 40px;
    background-color: papayawhip;
`;

export const DropDownMenu = styled.div`
    position: absolute;
    width: 50px;
    height: 40px;
    left: 0;
    top: calc(100% + 0.25rem);
    background-color: white;
    padding: 0.75rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
`;

export const PageHeaderOuter = styled.div`
    position: absolute;
    height: 50px;
    top: 150px;
    margin-right: 56vw;
`;

export const PageHeader = styled.div`
    font-size: 20px;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const Outer = styled.div`
    z-index: 10;
    color: #fefefe;

    background-color: none;
    height: 222px;
    //width: calc(100vw - 285px);
    padding-right: 20px;
    border-radius: 20px 20px 20px 20px;
    background-color: rgb(250, 250, 250);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);

    &:hover {
        cursor: pointer;
        background-color: rgb(240, 240, 240);
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    height: 100%;
`;
export const Information = styled.div`
    gap: 6px;
    padding-left: 15px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
`;
export const Profile = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 170px;
    object-fit: cover;
    border-radius: 20px 0 0 20px;
`;

export const ProfilePicture = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;
export const ProfileName = styled.span`
    margin-left: 6px;
    font-size: 14px;
    color: rgb(60, 60, 60);
`;

export const Title = styled.span`
    display: flex;
    font-size: 22px;
    font-weight: 300;
    color: black;
`;
export const Views = styled.span`
    color: rgb(60, 60, 60);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    &:after {
        content: "•";
        margin-left: 8px;
        margin-right: 8px;
    }
`;

export const Upload = styled.span`
    color: grey;
    font-size: 14px;
`;
export const Description = styled.span`
    margin-top: 10px;
    color: rgb(80, 80, 80);
    font-size: 14px;
`;
export const ViewsContainer = styled.div`
    display: flex;
`;

export const Duration = styled.div`
    z-index: 100;
    display: inline-block;
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 1.5px;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    font-size: 12px;
    padding: 4px 6px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    left: 130px;
    bottom: 5px;
    color: white;
`;

export const Filter = styled.img`
    margin-left: 10px;
    width: 20px;
    color: ${(props) => props.theme.content.filter};
`;

export const SearchOuterContainer = styled.div`
    display: flex;
    transition: 0.2s ease-in-out;
    align-items: center;
    width: 100%;
    height: 35px;
    border-bottom: 2px solid rgb(200, 200, 200);
    text-overflow: ellipsis;
    border-radius: 10px 10px 0px 0px;

    &:has(input:focus) {
        outline: none;
        border-color: #a63fcb;
    }
    &:hover {
        border-color: ${(props) => props.theme.cardFontSecondary};
    }
`;

export const InputField = styled.input`
    position: relative;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 20px;
    margin: auto;
    margin: 5px 0px 5px 0px;
    text-overflow: ellipsis;
    font-size: 1rem;
    background-color: transparent;
    font-weight: 400;
`;

export const TopContainer = styled.div`
    display: grid;
    width: 100%;
    align-items: flex-end;
    height: 50px;
    grid-template-columns: 4fr 5fr;
    justify-content: space-between;
    transform: translateY(30px);

    @media (max-width: 850px) {
        grid-template-columns: 6fr 4fr;
    }

    @media (max-width: 450px) {
        grid-template-columns: 7fr 3fr;
    }
`;

export const FilterButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const FilterButton = styled.img`
    width: 25px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const FilterExpandedOuterContainer = styled.div`
    margin-top: ${(props) => (props.isExpanded ? "20px" : "10px")};
    transition: 0.3s ease-in-out;
    padding: ${(props) => (props.isExpanded ? "0px" : "0px")};
    height: ${(props) => (props.isExpanded ? "250px" : "0px")};
    width: 100%;
    border-radius: 20px;
    background-color: lightgray;
`;

export const FilterExpandedContent = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isExpanded ? "show" : "none")};
`;

export const SubmitButton = styled.button`
    width: 80px;
    height: 30px;
    border-radius: 20px;
    transition: 0.2s;
    text-align: center;
    line-height: 27px;
    font-size: 1rem;
    font-weight: 600;
    //Bg is transparent for darkmode
    background-color: ${(props) => props.theme.cardBGHover};
    color: ${(props) => props.theme.cardFontPrimary};
    border: 0.01em solid ${(props) => props.theme.cardFontPrimary};
    &:hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        background-color: rgba(166, 63, 203, 0.5);
        color: ${(props) => props.theme.white};
    }
`;

export const SearchMostOuterContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    gap: 10px;
`;

export const ShowingResults = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 30px;
    font-weight: 300;
    float: right;
    font-size: 22px;
    letter-spacing: 1px;

    @media (max-width: 395px) {
        display: none;
    }
`;
