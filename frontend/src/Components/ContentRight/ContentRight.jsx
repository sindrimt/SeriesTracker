import React, { useState, useEffect } from "react";

import ChartCard from "../Cards/ChartCard/ChartCard";

import axios from "axios";

import {
    ContentRightOuter,
    ChartsContainer,
    TopAnimeImage,
    ImageHeader,
    ImageInformation,
    ImageNumber,
    ImageRating,
} from "../ContentRight/ContentRightStyles";
import { TopAnimeOuter } from "../ContentRight/ContentRightStyles";
import { useScroll } from "../../Hooks/useScroll";

const ContentRight = ({ arrayLength }) => {
    const [topAnimes, setTopAnimes] = useState([]);
    const scrollPosition = useScroll();

    let isFixed = false;

    const fetchTopAnimes = () => {
        return new Promise((resolve, reject) => {
            axios
                .get(`https://api.jikan.moe/v4/top/anime`)
                .then(({ data }) => {
                    console.log(data);
                    resolve([data, arrayLength]);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    if (scrollPosition >= 30) {
        isFixed = true;
    }

    const shuffle = (array) => {
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
    };

    useEffect(() => {
        fetchTopAnimes().then((res) => {
            console.log(res);
            //let shuffledArray = shuffle(res[0].top);

            setTopAnimes(res[0].data.slice(0, 9));
        });
    }, [arrayLength]);

    //console.log(topAnimes[0]?.image_url);

    return (
        <>
            <ContentRightOuter isFixed={isFixed}>
                <ChartsContainer>
                    <TopAnimeOuter>
                        <TopAnimeImage
                            /* src={topAnimes[0]?.image_url} */ src="https://cdn.bagogames.com/wp-content/uploads/2021/03/31065408/one-piece-wano-arc.jpeg?strip=all&lossy=1&ssl=1"
                        />
                        <ImageInformation>
                            <ImageNumber>1</ImageNumber>
                            <ImageHeader>One Piece</ImageHeader>
                            <ImageRating>9.80</ImageRating>
                        </ImageInformation>
                    </TopAnimeOuter>
                    {topAnimes?.map((anime, index) => {
                        return (
                            <ChartCard
                                key={index}
                                image={anime.images.webp.image_url ? anime.images.webp.image_url : anime.images.jpg.image_url}
                                title={anime.title}
                                rating={anime.score}
                                number={index}
                            />
                        );
                    })}
                </ChartsContainer>
            </ContentRightOuter>
        </>
    );
};

export default ContentRight;
