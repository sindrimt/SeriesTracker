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
} from "./NavbarStyles";

import SeriesTrackerLogoLM from "../../Assets/Images/logo_lightmode.png";
import SeriesTrackerLogoDM from "../../Assets/Images/logo_darkmode.png";

import { logOut } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/user/userSlice";

import { useScroll } from "../../Hooks/useScroll";

import { toggleTheme } from "../../redux/features/theme/colorThemeSlice";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  //const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo
          src={colorTheme === "light" ? SeriesTrackerLogoLM : SeriesTrackerLogoDM}
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
          <ThemeIcon>
            {colorTheme === "light" ? (
              <MdOutlineLightMode onClick={handleToggle} size={25} />
            ) : (
              <MdOutlineDarkMode onClick={handleToggle} size={25} />
            )}
          </ThemeIcon>
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
