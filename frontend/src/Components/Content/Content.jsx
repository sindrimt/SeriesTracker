import React, { useState } from "react";

import {
  ContentContainerOuter,
  PickUp,
  Filter,
  GridTypeIcons,
  Icon,
  ContentContainerGrid,
  ContentContainerGridIcons,
} from "./ContentStyles";

import HomepageCard from "../Cards/HomepageCard/Card";
import { Link } from "react-router-dom";

import filter from "../../Assets/Content/Adjust.svg";
import rowView from "../../Assets/Content/Playlist.svg";
import iconViewIcon from "../../Assets/Content/Apps.svg";

import loffi from "../../Assets/Images/loffi.png";
import AddSerieButton from "../AddSerie/AddSerieButton/AddSerieButton";

const Content = () => {
  const [iconView, setIconView] = useState(false);

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
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
          </ContentContainerGridIcons>
        ) : (
          <ContentContainerGrid>
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
            <HomepageCard />
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
