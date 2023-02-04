import styled from "styled-components";

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
        // background-color: rgb(240, 240, 240);
        background-color: ${(props) => props.theme.lightgrey};
        cursor: pointer;
    }

    @media (max-width: 720px) {
        width: calc(100% - 20px);
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
    width: 100%;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
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

    &:has(input:focus) {
        outline: none;
        border-color: #a63fcb;
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
    grid-template-columns: 3fr 5fr;
    justify-content: space-between;
    transform: translateY(20px);
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
    margin-top: 10px;
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
