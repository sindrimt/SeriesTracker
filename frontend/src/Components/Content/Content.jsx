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
    SubmitButton,
    ButtonContainer,
} from "./ContentStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import HomepageCard from "../Cards/HomepageCard/Card";
import GridCard from "../Cards/HomepageCard/GridCard";
import NewHomePageCard from "../Cards/HomepageCard/NewHomePageCard";

import { Link } from "react-router-dom";

import rowView from "../../Assets/Content/Playlist.svg";
import iconViewIcon from "../../Assets/Content/Apps.jsx";

/*Darkmode icons*/
import filter from "../../Assets/Content/Adjust.svg";
import filter_darkmode from "../../Assets/Content/Adjust_darkmode.svg";
import RowView from "../../Assets/Content/Playlist.jsx";
import IconView from "../../Assets/Content/Apps.jsx";

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
import { AiOutlinePlus } from "react-icons/ai";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Content = ({ series, setIsDeleted, isDeleted, loading }) => {
    const resultsPrPage = 8;

    const [iconView, setIconView] = useState(false);
    const [seriesArray, setSeriesArray] = useState(series);
    const [filtered, setFiltered] = useState(series);
    const [searchTerm, setSearchTerm] = useState("");
    const [update, setUpdate] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(Math.ceil(series?.length / resultsPrPage));
    const [updateState, setUpdateState] = useState(false);
    const [isActive, setIsActive] = useState("row");

    const colorTheme = useSelector((state) => state.theme.theme);
    const currentUser = useAuth();
    let navigate = useNavigate();

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

    useEffect(() => {
        setUpdateState(!updateState);
    }, [pageNumber]);

    if (loading) {
        return <></>;
    }

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
                        {colorTheme === "light" ? (
                            <>
                                <Icon
                                    onClick={() => {
                                        setIsActive("row");
                                        setIconView(false);
                                    }}
                                >
                                    <RowView color={isActive === "row" ? "#a63fcb" : "rgb(60, 60, 60)"} />
                                </Icon>
                                <Icon
                                    onClick={() => {
                                        setIsActive("icon");
                                        setIconView(true);
                                    }}
                                >
                                    <IconView color={isActive === "icon" ? "#a63fcb" : "rgb(60, 60, 60)"} />
                                </Icon>
                            </>
                        ) : (
                            <>
                                <Icon
                                    onClick={() => {
                                        setIsActive("row");
                                        setIconView(false);
                                    }}
                                >
                                    <RowView color={isActive === "row" ? "#a63fcb" : "#eee3c1ff"} />
                                </Icon>
                                <Icon
                                    onClick={() => {
                                        setIsActive("icon");
                                        setIconView(true);
                                    }}
                                >
                                    <IconView color={isActive === "icon" ? "#a63fcb" : "#eee3c1ff"} />
                                </Icon>
                            </>
                        )}
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
                            sx={{
                                color: "success.main",
                                "& .MuiPaginationItem-root": {
                                    color: colorTheme === "light" ? "rgb(80, 80, 80)" : "#eee3c1ff",
                                },
                            }}
                        />
                    </Stack>
                </PaginationContainer>
                {iconView ? (
                    <ContentContainerGridIcons>
                        {filtered?.length === 0 && !loading ? (
                            <>
                                <ButtonContainer>
                                    <SubmitButton onClick={() => navigate("/create-post")}>
                                        <AiOutlinePlus size={25} color={"rgb(80, 80, 80)"} />
                                    </SubmitButton>
                                    <span style={{ fontSize: "18px", fontWeight: "400" }}>Add your first serie!</span>
                                </ButtonContainer>
                            </>
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
                        {filtered?.length === 0 && !loading ? (
                            <>
                                <ButtonContainer show={loading}>
                                    <SubmitButton onClick={() => navigate("/create-post")}>
                                        <AiOutlinePlus size={25} color={"rgb(80, 80, 80)"} />
                                    </SubmitButton>
                                    <span style={{ fontSize: "18px", fontWeight: "400" }}>Add your first serie!</span>
                                </ButtonContainer>
                            </>
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
                                            episodes={serie?.episodes}
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
                                            updateState={updateState}
                                            serie={serie}
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
