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

/*Darkmode icons*/
import filter_darkmode from "../../Assets/Content/Adjust_darkmode.svg";
import rowView_darkmode from "../../Assets/Content/Playlist_darkmode.svg";
import iconViewIcon_darkmode from "../../Assets/Content/Apps_darkmode.svg";

/*Hotdog icons*/
import filter_hotdog from "../../Assets/Content/Adjust_hotdog.svg";
import rowView_hotdog from "../../Assets/Content/Playlist_hotdog.svg";
import iconViewIcon_hotdog from "../../Assets/Content/Apps_hotdog.svg";

import loffi from "../../Assets/Images/loffi.png";
import AddSerieButton from "../AddSerie/AddSerieButton/AddSerieButton";
import { useSelector } from "react-redux";

import { useAuth } from "../../firebase";

import axios from "axios";

const Content = ({ series }) => {
  const [iconView, setIconView] = useState(false);
  const [loading, setLoading] = useState(false);

  const colorTheme = useSelector((state) => state.theme.theme);

  const currentUser = useAuth();

  console.log(series?.length);

  return (
    <>
      <ContentContainerOuter>
        <PickUp>
          Pick up where you left
          <Filter src={colorTheme === "light" ? filter : colorTheme === "dark" ? filter_darkmode : filter_hotdog} />
          <GridTypeIcons>
            <Icon src={colorTheme === "light" ? rowView : colorTheme === "dark" ? rowView_darkmode : rowView_hotdog} />
            <Icon
              src={
                colorTheme === "light"
                  ? iconViewIcon
                  : colorTheme === "dark"
                  ? iconViewIcon_darkmode
                  : iconViewIcon_hotdog
              }
              onClick={() => setIconView(!iconView)}
            />
          </GridTypeIcons>
        </PickUp>
        {iconView ? (
          <ContentContainerGridIcons>
            {series?.length === 0
              ? "You have no watched series"
              : series?.map((serie) => (
                  <>
                    <HomepageCard
                      title={serie?.title}
                      episodesWatched={serie?.episodesWatched}
                      episodeCount={serie?.episodeCount}
                      rating={serie?.rating}
                      image={serie?.photoUrl}
                      watchTime={serie?.watchTime}
                    />
                  </>
                ))}
          </ContentContainerGridIcons>
        ) : (
          <ContentContainerGrid>
            {series?.length === 0
              ? "You have no watched series"
              : series?.map((serie) => (
                  <>
                    <HomepageCard
                      title={serie?.title}
                      episodesWatched={serie?.episodesWatched}
                      episodeCount={serie?.episodeCount}
                      rating={serie?.rating}
                      image={serie?.photoUrl}
                      watchTime={serie?.watchTime}
                    />
                  </>
                ))}
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
