import React, { useState, useEffect } from "react";
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
  Hamburger,
  ListItem,
  CategoryItem,
  ItemText,
  SearchIcon,
} from "./SidebarStyles";

import { AiOutlineSearch } from "react-icons/ai";

import notifications from "../../Assets/Sidebar/bell.svg";
import dashboard from "../../Assets/Sidebar/grid.svg";
import messages from "../../Assets/Sidebar/message-square.svg";
import settings from "../../Assets/Sidebar/settings.svg";
import friends from "../../Assets/Sidebar/users.svg";
import hamburger from "../../Assets/Sidebar/hamburger.svg";

const Sidebar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let fixed = false;

  if (scrollPosition > 65) {
    fixed = true;
  }

  return (
    <>
      <SidebarOuter isFixed={fixed}>
        <Hamburger src={hamburger} alt="Sidebar menu" />
        <SearchOuter>
          Search series
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchSeries">Search series</label>
            <input id="searchSeries" type="text" role="searchbox" placeholder="Search" />
            <SearchIcon>
              <AiOutlineSearch color="rgba(0, 0, 0, 0.8)" />
            </SearchIcon>
          </form>
        </SearchOuter>
        <CategoriesOuter>
          <ul className="categoryParent">
            <li>Categories</li>
            <ul className="category">
              <CategoryItem>
                <input type="checkbox" />
                <ItemText>Epic</ItemText>
              </CategoryItem>
              <CategoryItem>
                <input type="checkbox" />
                <ItemText>Anime</ItemText>
              </CategoryItem>
              <CategoryItem>
                <input type="checkbox" />
                <ItemText>Fiction</ItemText>
              </CategoryItem>
              <CategoryItem>
                <li>View more ...</li>
              </CategoryItem>
            </ul>
          </ul>
        </CategoriesOuter>
        <SidebarLine></SidebarLine>
        <PanelOuter>
          <ul className="panel">
            <ListItem>
              <li>
                <Icons src={dashboard} alt="Dashboard icon" />
                Dashboard
              </li>
            </ListItem>
            <ListItem>
              <li className="panelItem">
                <Icons src={friends} alt="Friends icon" />
                Friends
              </li>
            </ListItem>
            <ListItem>
              <li className="panelItem">
                <Icons src={messages} alt="Messages icon" />
                Direct Messages
              </li>
            </ListItem>
            <ListItem>
              <li className="panelItem">
                <Icons src={notifications} alt="Notifications icon" />
                Notifications
              </li>
            </ListItem>
            <ListItem>
              <li className="panelItem">
                <Icons src={settings} alt="Settings icon" />
                Settings
              </li>
            </ListItem>
          </ul>
        </PanelOuter>
        <SidebarBottomLine />
        <Trademark>SeriesTracker 2022&reg; corporation</Trademark>
      </SidebarOuter>
    </>
  );
};

export default Sidebar;
