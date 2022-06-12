import React, { useState, useEffect } from "react";

import ChartCard from "../Cards/ChartCard/ChartCard";

import axios from "axios";

import { ContentRightOuter, ChartsContainer } from "../Cards/ChartCard/ChartCardStyles";

import Loading from "../../Pages/LoadingPage/Loading";

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

  return (
    <>
      <ContentRightOuter>
        <ChartsContainer>
          {topAnimes?.map((anime, index) => {
            return <ChartCard key={index} image={anime.image_url} title={anime.title} rating={anime.score} />;
          })}
        </ChartsContainer>
      </ContentRightOuter>
    </>
  );
};

export default ContentRight;
