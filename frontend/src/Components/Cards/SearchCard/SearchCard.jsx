import React from "react";

import {
    Outer,
    ImageContainer,
    Image,
    Title,
    Upload,
    Views,
    ViewsContainer,
    Information,
    Profile,
    ProfilePicture,
    ProfileName,
    Duration,
    Description,
} from "./SearchCardStyles";
import { CgScreen } from "react-icons/cg";
import { duration } from "@mui/material";

const SearchCard = ({ title, episodes, image, description, episodeLength, airing, duration, type }) => {
    let changedDescription = "";
    if (description?.length >= 200) {
        changedDescription = description.slice(0, 200) + "...";
    } else if (!description?.length) {
        changedDescription = "";
    } else {
        changedDescription = description;
    }

    // Prevents an empty card at the bottom for some reason
    if (!title) return "";

    return (
        <Outer>
            <ImageContainer>
                <Image src={image} alt="Image" />
                {/*  <Duration>{episodeLength}</Duration> */}

                <Information>
                    <Title>{title}</Title>
                    <ViewsContainer>
                        <Views>{!episodes ? "N/A" : episodes + " Episodes"}</Views>
                        <Upload>{airing ? "Airing" : "Not airing"}</Upload>
                    </ViewsContainer>
                    <Profile>
                        {/* <ProfilePicture /> */}
                        <CgScreen color="rgb(60, 60, 60)" size={22} />
                        <ProfileName>
                            {type === "Movie" ? "Anime / Movie" : "Anime"} - {duration}
                        </ProfileName>
                    </Profile>

                    <Description>{changedDescription}</Description>
                </Information>
            </ImageContainer>
        </Outer>
    );
};

export default SearchCard;
