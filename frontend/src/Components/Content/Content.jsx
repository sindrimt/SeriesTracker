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
import { AiOutlineSearch } from "react-icons/ai";

import { useAuth } from "../../firebase";

const Content = ({ series, setIsDeleted, isDeleted }) => {
    const [iconView, setIconView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seriesArray, setSeriesArray] = useState(series);
    const [filtered, setFiltered] = useState(series);
    const [searchTerm, setSearchTerm] = useState("");
    const [update, setUpdate] = useState(false);

    const colorTheme = useSelector((state) => state.theme.theme);
    const currentUser = useAuth();

    useEffect(() => {
        console.log("e");
        filterSeries();
    }, [searchTerm]);

    const filterSeries = () => {
        let filter = seriesArray.filter((serie) => {
            return serie?.title?.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFiltered(filter);
    };

    return (
        <>
            <ContentContainerOuter>
                <PickUp>
                    <span className="pickupSpan">Pick up where you left</span>

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
                                        isDeleted={isDeleted}
                                        setIsDeleted={setIsDeleted}
                                        update={setUpdate}
                                        title={serie?.title}
                                        episodesWatched={serie?.episodesWatched}
                                        episodeCount={serie?.episodeCount}
                                        rating={serie?.rating}
                                        image={serie?.photoUrl}
                                        watchTime={serie?.watchTime}
                                        description={
                                            serie?.description ? serie?.description : "Gol D. Roger obtained everything the world had to offer ..."
                                        }
                                        id={serie?._id}
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
