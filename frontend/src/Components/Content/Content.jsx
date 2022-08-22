import React, { useState, useEffect } from "react";

import {
    ContentContainerOuter,
    PickUp,
    Filter,
    GridTypeIcons,
    Icon,
    ContentContainerGrid,
    ContentContainerGridIcons,
    SearchOuter,
    SearchOuterContainer,
} from "./ContentStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import HomepageCard from "../Cards/HomepageCard/Card";
import GridCard from "../Cards/HomepageCard/GridCard";

import { Link } from "react-router-dom";

import filter from "../../Assets/Content/Adjust.svg";
import rowView from "../../Assets/Content/Playlist.svg";
import iconViewIcon from "../../Assets/Content/Apps.svg";

/*Darkmode icons*/
import filter_darkmode from "../../Assets/Content/Adjust_darkmode.svg";
import rowView_darkmode from "../../Assets/Content/Playlist_darkmode.svg";
import iconViewIcon_darkmode from "../../Assets/Content/Apps_darkmode.svg";

/*Hotdog icons*/
import filter_hotdog from "../../Assets/Content/Adjust_hotdog.svg";
import rowView_hotdog from "../../Assets/Content/Playlist_hotdog.svg";
import iconViewIcon_hotdog from "../../Assets/Content/Apps_hotdog.svg";

import loffi from "../../Assets/Images/loffi.png";
import AddSerieButton from "../AddSerie/AddSerieButton/AddSerieButton";
import { useSelector } from "react-redux";

import { useAuth } from "../../firebase";

const Content = ({ series }) => {
    const [iconView, setIconView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seriesArray, setSeriesArray] = useState(series);
    const [filtered, setFiltered] = useState(series);
    const [searchTerm, setSearchTerm] = useState("");

    const colorTheme = useSelector((state) => state.theme.theme);
    const currentUser = useAuth();

    useEffect(() => {
        console.log("e");
        let filter = seriesArray.filter((serie) => {
            return serie?.title?.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFiltered(filter);
    }, [searchTerm]);

    return (
        <>
            <ContentContainerOuter>
                <PickUp>
                    <span className="pickupSpan">Pick up where you left</span>
                    <SearchOuterContainer>
                        <form style={{ width: "100%" }}>
                            <SearchOuter type="search" placeholder="Search your series" onChange={(e) => setSearchTerm(e.target.value)} />
                        </form>
                        <Filter src={colorTheme === "light" ? filter : colorTheme === "dark" ? filter_darkmode : filter_hotdog} />
                    </SearchOuterContainer>
                    <GridTypeIcons>
                        <Icon src={colorTheme === "light" ? rowView : colorTheme === "dark" ? rowView_darkmode : rowView_hotdog} />
                        <Icon
                            src={colorTheme === "light" ? iconViewIcon : colorTheme === "dark" ? iconViewIcon_darkmode : iconViewIcon_hotdog}
                            onClick={() => setIconView(!iconView)}
                        />
                    </GridTypeIcons>
                </PickUp>
                {iconView ? (
                    <ContentContainerGridIcons>
                        {filtered?.length === 0 ? (
                            <span style={{ fontSize: "18px", paddingTop: "20px" }}>No results!</span>
                        ) : (
                            filtered?.map((serie) => (
                                <>
                                    <GridCard
                                        title={serie?.title}
                                        episodesWatched={serie?.episodesWatched}
                                        episodeCount={serie?.episodeCount}
                                        rating={serie?.rating}
                                        image={serie?.photoUrl}
                                        watchTime={serie?.watchTime}
                                    />
                                </>
                            ))
                        )}
                    </ContentContainerGridIcons>
                ) : (
                    <ContentContainerGrid>
                        {filtered?.length === 0 ? (
                            <span style={{ fontSize: "18px", paddingTop: "20px" }}>No results!</span>
                        ) : (
                            filtered?.map((serie) => (
                                <>
                                    <HomepageCard
                                        title={serie?.title}
                                        episodesWatched={serie?.episodesWatched}
                                        episodeCount={serie?.episodeCount}
                                        rating={serie?.rating}
                                        image={serie?.photoUrl}
                                        watchTime={serie?.watchTime}
                                        description={
                                            serie?.description ? serie?.description : "Gol D. Roger obtained everything the world had to offer ..."
                                        }
                                    />
                                </>
                            ))
                        )}
                    </ContentContainerGrid>
                )}
            </ContentContainerOuter>
            {/* <Link to="/create-post">
                <AddSerieButton />
            </Link> */}
        </>
    );
};

export default Content;
