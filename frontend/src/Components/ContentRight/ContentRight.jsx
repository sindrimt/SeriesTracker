import React, { useState, useEffect } from "react";

import ChartCard from "../Cards/ChartCard/ChartCard";

import axios from "axios";

import { ContentRightOuter, ChartsContainer } from "../Cards/ChartCard/ChartCardStyles";

const ContentRight = () => {
  const [topAnimes, setTopAnimes] = useState([]);

  const fetchTopAnimes = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        //https://api.jikan.moe/v3/top/type/page/subtype
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    fetchTopAnimes().then((res) => {
      setTopAnimes(res.top);
      console.log(res);
    });
  }, []);

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
