import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { CreatePostOuter, Gridcontainer, SearchOuter, DropDownOuter, DropDownMenu } from "./CreatePostStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import AnimeCard from "../Cards/AnimeCard/AnimeCard";

import { useScroll } from "../../Hooks/useScroll";

const CreatePost = () => {
    const [topAnime, setTopAnime] = useState([]);

    const [loading, setLoading] = useState(false);

    const [open, setOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const [filtered, setFiltered] = useState([]);

    const scrollPosition = useScroll();

    let fixed = false;

    if (scrollPosition > 30) {
        fixed = true;
    }

    //TODO: For more indepth filtering and such, use this format:
    //TODO https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity

    const GetTopAnime = () => {
        setLoading(true);

        let animeAndMangaObject = {};

        axios
            .get(`https://api.jikan.moe/v4/top/anime`)
            //https://api.jikan.moe/v4/top/type/page/subtype
            .then(({ data }) => {
                animeAndMangaObject.anime = data;

                console.log(data.data);
                // setTopAnime(data.data);
                // setFiltered(data.data);
            })
            .then(async () => {
                await new Promise((r) => setTimeout(r, 1000));
                return axios.get(`https://api.jikan.moe/v4/top/manga`);
            })
            .then(({ data }) => {
                animeAndMangaObject.manga = data;

                let mergedObject = animeAndMangaObject.anime.data.concat(animeAndMangaObject.manga.data);

                let shuffeledMergedObject = shuffle(mergedObject);

                setTopAnime(mergedObject);
                setFiltered(mergedObject);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log("Fetched anime");
        GetTopAnime();
    }, []);

    useEffect(() => {
        let animeFilter = topAnime.filter((anime) => {
            return anime?.title_english?.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFiltered(animeFilter);
    }, [searchTerm]);

    if (loading) {
        return <Loading />;
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CreatePostOuter>
                {/* <DropDownOuter>
                    <DropDownMenu>Anime Manga</DropDownMenu>
                </DropDownOuter> */}
                <SearchOuter isFixed={fixed}>
                    <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
                </SearchOuter>
                <Gridcontainer>
                    {filtered?.map((anime, index) => {
                        let animeDurationAsNumber;
                        let animeDurationAsText;

                        // If anime duration in in minutes
                        if (anime?.duration?.includes("per")) {
                            animeDurationAsNumber = parseInt(anime?.duration.split("per")[0]);
                            animeDurationAsText = `${anime?.duration.split("min")[0].replace(" ", "")}:00`;
                        }

                        // If anime is in hours
                        else if (anime?.duration?.includes("hr")) {
                            // Convert hours into minutes
                            animeDurationAsNumber = parseInt(anime?.duration.split("hr")[1]) + parseInt(anime?.duration.split("hr")[0]) * 60;

                            // Convert hours into 00:00 format
                            animeDurationAsText = `0${anime?.duration.split("hr")[0].trim()}:${`${anime?.duration
                                .split("hr")[1]
                                .split("min")[0]
                                .trim()}:00`}`;
                        }

                        return (
                            <>
                                <AnimeCard
                                    title={anime?.title_english ? anime?.title_english : anime?.title}
                                    episodes={anime?.episodes ? anime?.episodes : 0} //TODO: Rather pass something else
                                    image={anime?.images?.jpg?.large_image_url}
                                    description={anime?.background}
                                    episodeLength={animeDurationAsText}
                                    key={index}
                                    setOpen={setOpen}
                                />
                            </>
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
