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

import Card from "../Card/Card";
import ContentRight from "../ContentRight/ContentRight";
import Sidebar from "../Sidebar/Sidebar";

import filter from "../../Assets/Content/Adjust.svg";
import rowView from "../../Assets/Content/Playlist.svg";
import iconViewIcon from "../../Assets/Content/Apps.svg";

import loffi from "../../Assets/Images/loffi.png";

const Content = () => {
  const [iconView, setIconView] = useState(false);

  return (
    <>
      <ContentContainerOuter>
        <Sidebar />
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
            <Card />
            <Card />
            <Card />
            <Card />
          </ContentContainerGridIcons>
        ) : (
          <ContentContainerGrid>
            <Card />
            <Card />
            <Card />
            <Card />
          </ContentContainerGrid>
        )}
      </ContentContainerOuter>
    </>
  );
};

export default Content;
