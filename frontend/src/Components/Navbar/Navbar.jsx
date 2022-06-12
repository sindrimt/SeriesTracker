import React, { useState, useEffect } from "react";

import {
  NavbarOuter,
  NavbarLine,
  NavbarProfileOuter,
  NavbarProfileImg,
  NavbarLinksOuter,
  Logo,
  WelcomeBack,
  NavbarProfileImgBack,
  ThemeIcon,
  ShowMore,
} from "./NavbarStyles";

import SeriesTrackerLogoLM from "../../Assets/Images/logo_lightmode.png";
import SeriesTrackerLogoDM from "../../Assets/Images/logo_darkmode.png";
import SeriesTrackerLogoHD from "../../Assets/Images/logo_hotdog.png";

import { logOut } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/user/userSlice";

import { useScroll } from "../../Hooks/useScroll";

import { toggleTheme } from "../../redux/features/theme/colorThemeSlice";

import { MdOutlineLightMode, MdOutlineDarkMode, MdExpandMore } from "react-icons/md";
import { GiHotDog } from "react-icons/gi";

const Navbar = () => {
  //const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const scrollPosition = useScroll();

  const globalUser = useSelector((state) => state.user.user);
  const colorTheme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  let color = false;
  let line = false;

  if (scrollPosition >= 45) {
    color = true;
  }
  if (scrollPosition >= 5) {
    line = true;
  }

  const handleLogOut = () => {
    dispatch(logoutUser());
    logOut();
  };

  const handleToggle = () => {
    dispatch(toggleTheme(colorTheme === "light" ? "dark" : "light"));
    console.log(colorTheme);
  };

  const decideProfilePic = () => {
    if (globalUser?.googlePhotoUrl) {
      return globalUser?.googlePhotoUrl;
    } else if (globalUser?.photoUrl) {
      return `api/${globalUser?.photoUrl}`;
    } else {
      return "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    }
  };

  const handleColorTheme = (theme) => {
    dispatch(toggleTheme(theme));
    setShowMore(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo
          src={
            colorTheme === "light"
              ? SeriesTrackerLogoLM
              : colorTheme === "dark"
              ? SeriesTrackerLogoDM
              : SeriesTrackerLogoHD
          }
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
          <ThemeIcon>
            {colorTheme === "light" && (
              <MdOutlineLightMode onClick={() => handleColorTheme("light")} size={25} className="themeIcon" />
            )}
            {colorTheme === "dark" && (
              <MdOutlineDarkMode onClick={() => handleColorTheme("dark")} size={25} className="themeIcon" />
            )}
            {colorTheme === "hotDog" && <GiHotDog size={25} onClick={() => handleColorTheme("hotDog")} />}
          </ThemeIcon>
          {showMore && (
            <ShowMore>
              {colorTheme === "light" && (
                <>
                  <MdOutlineDarkMode size={25} onClick={() => handleColorTheme("dark")} className="icon" />
                  <GiHotDog size={25} onClick={() => handleColorTheme("hotDog")} className="icon" />
                </>
              )}
              {colorTheme === "dark" && (
                <>
                  <MdOutlineLightMode onClick={() => handleColorTheme("light")} size={25} className="icon" />
                  <GiHotDog size={25} onClick={() => handleColorTheme("hotDog")} className="icon" />
                </>
              )}
              {colorTheme === "hotDog" && (
                <>
                  <MdOutlineDarkMode size={25} onClick={() => handleColorTheme("dark")} className="icon" />
                  <MdOutlineLightMode onClick={() => handleColorTheme("light")} size={25} className="icon" />
                </>
              )}
            </ShowMore>
          )}
          {showMore ? (
            <MdExpandMore size={22} onClick={() => setShowMore(!showMore)} className="showless" />
          ) : (
            <MdExpandMore size={22} onClick={() => setShowMore(!showMore)} className="showmore" />
          )}
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <div>
            <WelcomeBack>
              WELCOME BACK <span style={{ fontWeight: "400" }}>{globalUser?.username}</span>
            </WelcomeBack>
          </div>
          <NavbarProfileImgBack>
            <NavbarProfileImg onClick={() => navigate("/profile")} src={decideProfilePic()} alt="Profile pic" />
          </NavbarProfileImgBack>
          <span className="signout" style={{ whiteSpace: "nowrap" }} onClick={handleLogOut}>
            SIGN OUT
          </span>
        </NavbarProfileOuter>
        <NavbarLine showLine={line} />
      </NavbarOuter>
    </>
  );
};

export default Navbar;
