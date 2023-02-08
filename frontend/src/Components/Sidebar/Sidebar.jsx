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
    AccountHeader,
    PanelOuterAccount,
    Github,
    GithubBack,
} from "./SidebarStyles";

import { AiOutlineSearch } from "react-icons/ai";

import notifications from "../../Assets/Sidebar/bell.svg";
import dashboard from "../../Assets/Sidebar/grid.svg";
import messages from "../../Assets/Sidebar/message-square.svg";
import settings from "../../Assets/Sidebar/settings.svg";
import friends from "../../Assets/Sidebar/users.svg";
import github from "../../Assets/Sidebar/github.svg";
import analytics from "../../Assets/Sidebar/analytics.svg";

import { useScroll } from "../../Hooks/useScroll";

import SidebarButton from "../../Components/Buttons/SidebarButton/SidebarButton";

import { VscMenu } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import styled from "styled-components";
import ToggleButton from "../Buttons/SidebarButton/ToggleButton/ToggleButton";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    let navigate = useNavigate();
    const scrollPosition = useScroll();

    const { width } = useWindowDimensions();

    let fixed = false;

    if (scrollPosition > 38) {
        fixed = true;
    }

    useEffect(() => {
        if (width >= 720) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, [width]);

    return (
        <>
            <VscMenu className="menuButton" onClick={() => setShowSidebar(!showSidebar)} size={25} />
            {showSidebar && (
                <SidebarOuter isFixed={fixed}>
                    {/*  <SearchOuter>
          Search series
          <form className="searchForm" onSubmit={/*) => e.preventDefault()}>
            <label htmlFor="searchSeries">Search series</label>
            <input id="searchSeries" type="text" role="searchbox" placeholder="Search" />
          </form>
        </SearchOuter> */}
                    <PanelOuter>
                        <SidebarButton icon={dashboard} text="Dashboard" clickAction={() => navigate("/")} />
                        {/* <SidebarButton icon={notifications} text="Notifications" /> */}
                        <SidebarButton icon={notifications} text="Find Series" clickAction={() => navigate("/create-post")} />
                        <SidebarButton icon={messages} text="Messages" clickAction={() => navigate("/messages")} />
                        <SidebarButton icon={friends} text="Friends" clickAction={() => navigate("/friends")} />
                        <SidebarButton icon={settings} text="Settings" clickAction={() => navigate("/settings")} />
                        <SidebarLine />
                    </PanelOuter>
                    <PanelOuterAccount>
                        <AccountHeader>Account</AccountHeader>
                        <SidebarButton icon={analytics} text="Stats" />
                        <SidebarButton icon={settings} text="Updates" />
                        <SidebarButton icon={analytics} text="Trending" />
                    </PanelOuterAccount>
                    <SidebarLine />
                    <ToggleButton />
                    <Contact>
                        Reach us at: <br></br>
                    </Contact>
                    <Email>business@seriestracker.net</Email>
                    <a href="https://github.com/sindrimt/SeriesTracker">
                        <GithubBack>
                            <Github src={github} />
                        </GithubBack>
                    </a>
                    <Trademark>SeriesTracker 2022&reg;</Trademark>
                </SidebarOuter>
            )}
        </>
    );
};

const Contact = styled.div`
    margin-top: 70px;
    justify-self: center;
    font-size: 14px;
`;

const Email = styled.div`
    justify-self: center;
    font-size: 12px;
    margin-bottom: 50px;
    margin-top: 5px;
`;

export default Sidebar;
