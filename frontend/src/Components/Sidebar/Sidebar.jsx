import React, { useState, useEffect } from "react";
import "./Sidebar.css";

import {
  SidebarOuter,
  SearchOuter,
  SidebarLine,
  PanelOuter,
  Icons,
  SidebarBottomLine,
  Trademark,
} from "./SidebarStyles";

import { AiOutlineSearch } from "react-icons/ai";

import notifications from "../../Assets/Sidebar/bell.svg";
import dashboard from "../../Assets/Sidebar/grid.svg";
import messages from "../../Assets/Sidebar/message-square.svg";
import settings from "../../Assets/Sidebar/settings.svg";
import friends from "../../Assets/Sidebar/users.svg";

import { useScroll } from "../../Hooks/useScroll";

import SidebarButton from "../../Components/Buttons/SidebarButton/SidebarButton";

const Sidebar = () => {
  const scrollPosition = useScroll();

  let fixed = false;

  if (scrollPosition > 38) {
    fixed = true;
  }

  return (
    <>
      <SidebarOuter isFixed={fixed}>
        {/*  <SearchOuter>
          Search series
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchSeries">Search series</label>
            <input id="searchSeries" type="text" role="searchbox" placeholder="Search" />
          </form>
        </SearchOuter> */}
        <PanelOuter>
          <SidebarButton icon={dashboard} text="Dashboard" />
          <SidebarButton icon={notifications} text="Notifications" />
          <SidebarButton icon={messages} text="Messages" />
          <SidebarButton icon={friends} text="Friends" />
          <SidebarButton icon={settings} text="Settings" />
        </PanelOuter>
        <Trademark>SeriesTracker 2022&reg; corporation</Trademark>
      </SidebarOuter>
    </>
  );
};

export default Sidebar;
