import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import {
    CreatePostOuter,
    Gridcontainer,
    SearchOuter,
    DropDownOuter,
    DropDownMenu,
    PageHeaderOuter,
    PageHeader,
    SearchOuterContainer,
    InputField,
    TopContainer,
    FilterButtonContainer,
    FilterButton,
    FilterExpandedOuterContainer,
    FilterExpandedContent,
    SubmitButton,
    SearchMostOuterContainer,
    ShowingResults,
} from "./CreatePostStyles";

import { AiOutlineSearch } from "react-icons/ai";
import Loading from "../../Pages/LoadingPage/Loading";
import filter from "../../Assets/CreatePost/filter.svg";
import SearchCard from "../Cards/SearchCard/SearchCard";

import { useSelector, useDispatch } from "react-redux";
import { setTopAnimesState } from "../../redux/features/topAnimes/topAnimesSlice";

const CreatePost = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [searchAll, setSearchAll] = useState({});
    const [displayHeader, setDisplayHeader] = useState(true);
    const [expandFilter, setExpandFilter] = useState(false);
    const [showingResults, setShowingResults] = useState("Top 50 Anime");

    const topAnimesState = useSelector((state) => state.topAnimes.topAnimes);
    const dispatch = useDispatch();

    const colorTheme = useSelector((state) => state.theme.theme);

    //TODO: For more indepth filtering and such, use this format:
    //TODO https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity

    const GetTopAnime = () => {
        return new Promise((resolve, reject) => {
            setLoading(true);

            let animeAndMangaObject = {};

            axios
                .get(`https://api.jikan.moe/v4/top/anime`)
                //https://api.jikan.moe/v4/top/type/page/subtype
                .then(({ data }) => {
                    //console.log(data);

                    animeAndMangaObject.anime = data;
                    // setTopAnime(data.data);
                    // setFiltered(data.data);
                })
                //TODO The code undereath is for getting mangas
                /* .then(async () => {
                    //  await new Promise((r) => setTimeout(r, 1000));
                    return axios.get(`https://api.jikan.moe/v4/top/manga`);
                }) */
                .then((/* { data } */) => {
                    //animeAndMangaObject.manga = data;

                    //TODO The commented code under neath is the code for having mangas
                    //let mergedObject = animeAndMangaObject.anime.data.concat(animeAndMangaObject.manga.data);

                    let mergedObject = animeAndMangaObject.anime.data;

                    //console.log(mergedObject);

                    //let shuffeledMergedObject = shuffle(mergedObject);

                    //setTopAnime(mergedObject);
                    setFiltered(mergedObject);
                    setLoading(false);
                    resolve(mergedObject);
                })
                .catch((error) => {
                    // console.log(error);
                    setLoading(false);
                    reject(error);
                });
        });
    };

    let init = true;

    useEffect(() => {
        setLoading(true);
        if (topAnimesState?.data?.length > 0) {
            //console.log("Already fetched");
            setLoading(false);
            return;
        } else {
            // console.log("FETCHING ANIMES");
            GetTopAnime().then((res) => {
                dispatch(setTopAnimesState(res[0].data));
                setLoading(false);
                //setTopAnimes(res[0].data.slice(0, 9));
            });
        }
    }, []);

    useEffect(() => {
        if (searchTerm.length === 0) {
            setShowingResults("Top 50 Anime");
        }
        let animeFilter = topAnimesState?.data?.filter((anime) => {
            return anime?.title_english?.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFiltered(animeFilter);
    }, [searchTerm.length === 0]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        let val = e.target.value;
        val === 0 ? setDisplayHeader(true) : setDisplayHeader(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowingResults(searchTerm);
        setLoading(true);
        searchAllAnimeAndManga(searchTerm)
            .then((searchObject) => {
                setFiltered(searchObject);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const searchAllAnimeAndManga = (searchTerm) => {
        let searchAllanimeAndMangaObject = {};

        return new Promise((resolve, reject) => {
            return axios
                .get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&order_by=mal_id&sort=asc`)
                .then(({ data }) => {
                    console.log(data);
                    searchAllanimeAndMangaObject.anime = data.data;
                })
                .then(() => {
                    return axios.get(`https://api.jikan.moe/v4/manga?q=${searchTerm}&order_by=mal_id&limit=10`);
                })
                .then(({ data }) => {
                    searchAllanimeAndMangaObject.manga = data.data;

                    let animeAndMangaMergedObject = searchAllanimeAndMangaObject.anime.concat(searchAllanimeAndMangaObject.manga);
                    resolve(animeAndMangaMergedObject);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <CreatePostOuter>
                {/* <DropDownOuter>
                    <DropDownMenu>Anime Manga</DropDownMenu>
                </DropDownOuter> */}
                <TopContainer>
                    <form onSubmit={handleSubmit}>
                        <SearchMostOuterContainer>
                            <SearchOuterContainer>
                                <AiOutlineSearch size={28} color="rgb(80, 80, 80)" />
                                <InputField placeholder="Search among series" onChange={(e) => setSearchTerm(e.target.value)} />
                            </SearchOuterContainer>
                            <SubmitButton>
                                {/* <AiOutlineSearch size={22} color="rgb(80, 80, 80)" /> */}
                                Search
                            </SubmitButton>
                        </SearchMostOuterContainer>
                    </form>

                    <FilterButtonContainer>
                        <FilterButton src={filter} onClick={() => setExpandFilter(!expandFilter)} />
                    </FilterButtonContainer>
                </TopContainer>
                <FilterExpandedOuterContainer isExpanded={expandFilter}>
                    <FilterExpandedContent isExpanded={expandFilter}>
                        Filter<br></br>sdfdsf sdfsd<br></br>sdfdsf sdfsd<br></br>sdfdsf sdfsd<br></br>sdfdsf sdfsd<br></br>sdfdsf sdfsd<br></br>sdfdsf
                        sdfsd<br></br>sdfdsf sdfsd<br></br>sdfdsf sdfsd
                    </FilterExpandedContent>
                </FilterExpandedOuterContainer>
                <ShowingResults>
                    Showing results for: <span style={{ fontWeight: "400", marginLeft: "5px" }}>{showingResults}</span>
                </ShowingResults>
                <Gridcontainer>
                    {filtered?.map((anime, index) => {
                        return (
                            <SearchCard
                                title={anime?.title_english ? anime?.title_english : anime?.title}
                                episodes={anime?.episodes ? anime?.episodes : 0}
                                image={anime?.images?.jpg?.large_image_url}
                                description={anime?.background}
                                airing={anime?.airing}
                                duration={anime?.duration}
                                type={anime?.type}
                                anime={anime}
                                key={index}
                            />
                        );
                    })}
                </Gridcontainer>
            </CreatePostOuter>
        </>
    );
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default CreatePost;
