import React from "react";

import { NavbarOuter, NavbarLine, NavbarProfileOuter, NavbarProfileImg, Logo } from "./NavbarStyles";

import SeriesTrackerLogo from "../../Assets/Images/logo.png";
import Loffi from "../../Assets/Images/loffi.png";

const Navbar = () => {
  return (
    <>
      <NavbarOuter>
        <Logo src={SeriesTrackerLogo} alt="Logo" />
        <div>sfsdfdsfdsfds</div>
        <NavbarProfileOuter>
          WELCOME BACK LUFFY
          <NavbarProfileImg src={Loffi} alt="Profile pic" />
          SIGN OUT
        </NavbarProfileOuter>
      </NavbarOuter>
      <NavbarLine />
    </>
  );
};

export default Navbar;
