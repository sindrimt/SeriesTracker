import React, { useState, useEffect } from "react";

import {
  ContentContainerOuter,
  PickUp,
  Filter,
  GridTypeIcons,
  Icon,
  ContentContainerGrid,
  ContentContainerGridIcons,
} from "./ContentStyles";

import Loading from "../../Pages/LoadingPage/Loading";

import HomepageCard from "../Cards/HomepageCard/Card";
import { Link } from "react-router-dom";

import filter from "../../Assets/Content/Adjust.svg";
import rowView from "../../Assets/Content/Playlist.svg";
import iconViewIcon from "../../Assets/Content/Apps.svg";

import loffi from "../../Assets/Images/loffi.png";
import AddSerieButton from "../AddSerie/AddSerieButton/AddSerieButton";
import { useSelector } from "react-redux";

import { useAuth } from "../../firebase";

import axios from "axios";

const Content = () => {
  const [iconView, setIconView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [done, setDone] = useState(false);

  const currentUser = useAuth();

  const getUserSeries = () => {
    setLoading(true);
    console.log(currentUser);
    axios
      .get(`api/series/${currentUser?.uid}`)
      .then(({ data }) => {
        setSeries(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      getUserSeries();
    } else {
      setTimeout(200);
      setDone(!done);
    }
  }, [done]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ContentContainerOuter>
        <PickUp>
          Pick up where you left
          <Filter src={filter} />
          <GridTypeIcons>
            <Icon src={rowView} />
            <Icon src={iconViewIcon} onClick={() => setIconView(!iconView)} />
          </GridTypeIcons>
        </PickUp>
        {iconView ? (
          <ContentContainerGridIcons>
            {series?.map((serie) => {
              return (
                <HomepageCard
                  title={serie?.title}
                  episodesWatched={serie?.episodesWatched}
                  episodeCount={serie?.episodeCount}
                  rating={serie?.rating}
                  image={serie?.photoUrl}
                />
              );
            })}
          </ContentContainerGridIcons>
        ) : (
          <ContentContainerGrid>
            {series?.map((serie) => {
              return (
                <HomepageCard
                  title={serie?.title}
                  episodesWatched={serie?.episodesWatched}
                  episodeCount={serie?.episodeCount}
                  rating={serie?.rating}
                  image={serie?.photoUrl}
                />
              );
            })}
          </ContentContainerGrid>
        )}
      </ContentContainerOuter>
      <Link to="/createPost">
        {/*  //TODO Add series button was here */}
        <AddSerieButton />
      </Link>
    </>
  );
};

export default Content;
