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

const ContentRight = ({ arrayLength }) => {
  const [topAnimes, setTopAnimes] = useState([]);

  const fetchTopAnimes = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(({ data }) => {
          resolve([data, arrayLength]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

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
      let shuffledArray = shuffle(res[0].top);
      setTopAnimes(shuffledArray.slice(0, res[1] + 2));
    });
  }, [arrayLength]);

  //console.log(topAnimes[0]?.image_url);

  return (
    <>
      <ContentRightOuter>
        <ChartsContainer>
          <TopAnimeOuter>
            <TopAnimeImage
              /* src={topAnimes[0]?.image_url} */ src="https://cdn.bagogames.com/wp-content/uploads/2021/03/31065408/one-piece-wano-arc.jpeg?strip=all&lossy=1&ssl=1"
            />
            <ImageInformation>
              <ImageNumber>1</ImageNumber>
              <ImageHeader>One Piece</ImageHeader>
              <ImageRating>9.8</ImageRating>
            </ImageInformation>
          </TopAnimeOuter>
          {topAnimes?.map((anime, index) => {
            return <ChartCard key={index} image={anime.image_url} title={anime.title} rating={anime.score} />;
          })}
        </ChartsContainer>
      </ContentRightOuter>
    </>
  );
};

export default ContentRight;
