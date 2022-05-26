import React from "react";

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
  return (
    <>
      <NavbarOuter>
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
      </NavbarOuter>
      <NavbarLine />
    </>
  );
};

export default Navbar;
