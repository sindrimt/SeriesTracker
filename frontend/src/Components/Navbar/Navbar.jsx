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

import { logOut, useAuth, userProfileUpdate, getGoogleRedirectResults } from "../../firebase.js";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [done, setDone] = useState(false);

  const currentUser = useAuth();

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
  if (scrollPosition >= 5) {
    line = true;
  }

  const handleLogOut = () => {
    logOut();
  };

  /*  const handleUpdate = () => {
    profilePic = localStorage.getItem("profilePic");

    userProfileUpdate();
    // console.log(`"${localStorage.getItem("profilePic")}"`);
  }; */

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo src={SeriesTrackerLogo} alt="Logo" />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          {/* <button onClick={() => console.log(currentUser)}>check user</button>
          <button onClick={() => console.log(localStorage.getItem("profilePic"))}>check pp</button>
          <button onClick={handleUpdate}>update</button> */}
          <div>
            <WelcomeBack>
              WELCOME BACK <span style={{ fontWeight: "400" }}>{currentUser?.email.split("@")[0].toUpperCase()}</span>
            </WelcomeBack>
          </div>
          <NavbarProfileImg
            src={
              currentUser?.photoURL ? currentUser?.photoURL : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="Profile pic"
          />
          <span className="signout" style={{ whiteSpace: "nowrap" }} onClick={handleLogOut}>
            SIGN OUT
          </span>
          {/* <button onClick={() => console.log(currentUser)}>Chck user</button> */}
        </NavbarProfileOuter>
        <NavbarLine showLine={line} />
      </NavbarOuter>
    </>
  );
};

export default Navbar;
