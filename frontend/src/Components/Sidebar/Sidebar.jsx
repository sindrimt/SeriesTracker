import React from "react";
import "./Sidebar.css";

import {
  SidebarOuter,
  SearchOuter,
  CategoriesOuter,
  SidebarLine,
  PanelOuter,
  Icons,
  SidebarBottomLine,
  Trademark,
} from "./SidebarStyles";

import notifications from "../../Assets/Sidebar/bell.svg";
import dashboard from "../../Assets/Sidebar/grid.svg";
import messages from "../../Assets/Sidebar/message-square.svg";
import settings from "../../Assets/Sidebar/settings.svg";
import friends from "../../Assets/Sidebar/users.svg";

const Sidebar = () => {
  return (
    <>
      <SidebarOuter>
        <SearchOuter>
          Search series
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchSeries">Search series</label>
            <input id="searchSeries" type="text" role="searchbox" placeholder="One Piece" value="" />
          </form>
        </SearchOuter>
        <CategoriesOuter>
          <ul className="categoryParent">
            <li>Categories</li>
            <ul className="category">
              <li>Action</li>
              <li>Anime</li>
              <li>Fiction</li>
              <li>View more ...</li>
            </ul>
          </ul>
        </CategoriesOuter>
        <SidebarLine></SidebarLine>
        <PanelOuter>
          <ul>
            <li>
              <Icons src={dashboard} alt="Dashboard icon" />
              Dashboard
            </li>
            <li>
              <Icons src={friends} alt="Friends icon" />
              Friends
            </li>
            <li>
              <Icons src={messages} alt="Messages icon" />
              Direct Messages
            </li>
            <li>
              <Icons src={notifications} alt="Notifications icon" />
              Notifications
            </li>
            <li>
              <Icons src={settings} alt="Settings icon" />
              Settings
            </li>
          </ul>
        </PanelOuter>
        <SidebarBottomLine />
        <Trademark>SeriesTracker 2022&reg; corporation</Trademark>
      </SidebarOuter>
    </>
  );
};

export default Sidebar;
