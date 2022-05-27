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

const Navbar = () => {
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

  /**
   * color: boolean - true: show navbar background color
   * line: boolean - true: hide navbar line
   */

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
          <div className="findsSeries">Find Series</div>
          <div classNAme="findfriends">Find Friends</div>
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <div>
            <WelcomeBack>WELCOME BACK LUFFY</WelcomeBack>
          </div>
          <NavbarProfileImg src={Loffi} alt="Profile pic" />
          <span className="signout" style={{ whiteSpace: "nowrap" }}>
            SIGN OUT
          </span>
        </NavbarProfileOuter>
        <NavbarLine showLine={line} />
      </NavbarOuter>
    </>
  );
};

export default Navbar;
