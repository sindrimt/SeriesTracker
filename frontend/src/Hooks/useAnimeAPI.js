import { useState, useEffect } from "react";
import axios from "axios";

export const useAnimeAPI = () => {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAnime = () => {
        setLoading(true);
        axios
            .get(`http://staging.jikan.moe/v4/top/anime`)
            //https://api.jikan.moe/v3/top/type/page/subtype
            .then(({ data }) => {
                console.log(data);
                setAnime(data.top.slice(0, 50));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log("Fetched anime");
        handleAnime();
    }, []);

    return [anime, loading];
};
