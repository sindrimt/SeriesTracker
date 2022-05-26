import React, { useState, useEffect } from "react";

import {
  NavbarOuter,
  NavbarLine,
  NavbarProfileOuter,
  NavbarProfileImg,
  NavbarLinksOuter,
  Logo,
  WelcomeBack,
} from "./NavbarStyles";

import SeriesTrackerLogo from "../../Assets/Images/logo.png";
import Loffi from "../../Assets/Images/loffi.png";

const Navbar = ({ backgroundColor }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbarColor, setShowNavbarColor] = useState(false);
  const [showLine, setShowLine] = useState(false);

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

  let color = false;
  let line = false;
  if (scrollPosition >= 95) {
    color = true;
  }
  if (scrollPosition >= 65) {
    line = true;
  }

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo src={SeriesTrackerLogo} alt="Logo" />
        <NavbarLinksOuter>
          <div style={{ paddingRight: "10px" }}>Find Series</div>
          <div className="FindSeries">Find Friends</div>
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <WelcomeBack>WELCOME BACK LUFFY</WelcomeBack>
          <NavbarProfileImg src={Loffi} alt="Profile pic" />
          <span style={{ whiteSpace: "nowrap" }}>SIGN OUT</span>
        </NavbarProfileOuter>
        <NavbarLine showLine={line} />
      </NavbarOuter>
    </>
  );
};

export default Navbar;
