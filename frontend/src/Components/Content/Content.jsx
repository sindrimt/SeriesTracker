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
    PaginationContainer,
} from "./ContentStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import HomepageCard from "../Cards/HomepageCard/Card";
import GridCard from "../Cards/HomepageCard/GridCard";
import NewHomePageCard from "../Cards/HomepageCard/NewHomePageCard";

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
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

import { useAuth } from "../../firebase";
import SearchCard from "../Cards/SearchCard/SearchCard";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Content = ({ series, setIsDeleted, isDeleted }) => {
    const resultsPrPage = 8;

    const [iconView, setIconView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seriesArray, setSeriesArray] = useState(series);
    const [filtered, setFiltered] = useState(series);
    const [searchTerm, setSearchTerm] = useState("");
    const [update, setUpdate] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(Math.ceil(series?.length / resultsPrPage));

    const colorTheme = useSelector((state) => state.theme.theme);
    const currentUser = useAuth();

    useEffect(() => {
        setPageNumber(1);
        // if (searchTerm === "") {
        //     setFiltered(series);
        //     setPageCount(Math.floor(series?.length / resultsPrPage));
        // }
        filterSeries();
    }, [searchTerm]);

    const filterSeries = () => {
        let filter = seriesArray.filter((serie) => {
            return serie?.title?.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setPageCount(Math.ceil(filter?.length / resultsPrPage));
        setFiltered(filter);
    };

    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <>
            <ContentContainerOuter>
                <PickUp>
                    <span className="pickupSpan">Pick up where you left</span>
                    <SearchOuterContainer>
                        <form style={{ width: "100%" }}>
                            {/* <AiOutlineSearch /> */}
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
                <PaginationContainer>
                    <Stack spacing={2}>
                        <Pagination
                            count={pageCount}
                            shape="rounded"
                            showFirstButton
                            showLastButton
                            page={pageNumber}
                            onChange={handleChange}
                            key={`slider-${pageNumber}`}
                        />
                    </Stack>
                </PaginationContainer>
                {iconView ? (
                    <ContentContainerGridIcons>
                        {filtered?.length === 0 ? (
                            <span style={{ fontSize: "18px", paddingTop: "20px" }}>No results!</span>
                        ) : (
                            filtered
                                .slice((pageNumber - 1) * resultsPrPage, (pageNumber - 1) * resultsPrPage + resultsPrPage)
                                ?.map((serie, index) => (
                                    <>
                                        <GridCard
                                            key={index}
                                            title={serie?.title}
                                            episodesWatched={serie?.episodesWatched}
                                            episodeCount={serie?.episodeCount}
                                            rating={serie?.rating}
                                            image={serie?.photoUrl}
                                            watchTime={serie?.watchTime}
                                        />
                                        {/* <SearchCard
                                        title={serie?.title}
                                        episodes={serie?.episodesWatched}
                                        image={serie?.photoUrl}
                                        description={""}
                                        airing={"not airing"}
                                        duration={serie?.watchTime}
                                        type={"anime"}
                                        key={index}
                                    /> */}
                                    </>
                                ))
                        )}
                    </ContentContainerGridIcons>
                ) : (
                    <ContentContainerGrid>
                        {filtered?.length === 0 ? (
                            <span style={{ fontSize: "18px", paddingTop: "20px" }}>No results!</span>
                        ) : (
                            filtered
                                ?.slice((pageNumber - 1) * resultsPrPage, (pageNumber - 1) * resultsPrPage + resultsPrPage)
                                ?.map((serie, index) => (
                                    <>
                                        {/*  <HomepageCard
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
                                    /> */}
                                        <NewHomePageCard
                                            key={index}
                                            title={serie?.title}
                                            episodes={serie?.episodesWatched}
                                            image={serie?.photoUrl}
                                            description={""}
                                            airing={"not airing"}
                                            duration={serie?.watchTime}
                                            type={"anime"}
                                            id={serie?._id}
                                            isDeleted={isDeleted}
                                            setIsDeleted={setIsDeleted}
                                            update={setUpdate}
                                            episodesWatched={serie?.episodesWatched}
                                            episodeCount={serie?.episodeCount}
                                            rating={serie?.rating}
                                            watchTime={serie?.watchTime}
                                        />
                                        {/*  <SearchCard
                                        title={serie?.title}
                                        episodes={serie?.episodesWatched}
                                        image={serie?.photoUrl}
                                        description={""}
                                        airing={"not airing"}
                                        duration={serie?.watchTime}
                                        type={"anime"}
                                        key={index}
                                    /> */}
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
