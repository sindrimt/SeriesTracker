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
} from "./NavbarStyles";

import SeriesTrackerLogo from "../../Assets/Images/logo.png";

import { logOut } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const globalUser = useSelector((state) => state.user.user);

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

  if (scrollPosition >= 45) {
    color = true;
  }
  if (scrollPosition >= 5) {
    line = true;
  }

  const handleLogOut = () => {
    logOut();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo src={SeriesTrackerLogo} alt="Logo" onClick={() => navigate("/")} />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
          {/*  <button onClick={() => console.log(globalUser)}>check</button> */}
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <div>
            <WelcomeBack>
              WELCOME BACK <span style={{ fontWeight: "400" }}>{globalUser?.username}</span>
            </WelcomeBack>
          </div>
          <NavbarProfileImgBack>
            <NavbarProfileImg
              onClick={() => navigate("/profile")}
              src={
                globalUser?.photoUrl ? globalUser?.photoUrl : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt="Profile pic"
            />
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
