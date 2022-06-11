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

  useEffect(() => {
    fetchTopAnimes().then((res) => {
      console.log(res);
      setTopAnimes(res[0].top.slice(0, res[1] + 2));
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
