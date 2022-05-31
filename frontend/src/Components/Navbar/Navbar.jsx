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

import { logOut, useAuth, getUserData, updateUserData } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [done, setDone] = useState(false);

  const [user, setUser] = useState({});

  const currentUser = useAuth();
  let navigate = useNavigate();

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
  useEffect(() => {
    checkUser();
  });

  const checkUser = async () => {
    await getUserData(currentUser?.uid).then((res) => {
      setUser(res);
    });
  };

  return (
    <>
      <NavbarOuter showBgColor={color}>
        <Logo src={SeriesTrackerLogo} alt="Logo" onClick={() => navigate("/")} />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <div>
            <WelcomeBack>
              WELCOME BACK <span style={{ fontWeight: "400" }}>{currentUser?.email.split("@")[0].toUpperCase()}</span>
            </WelcomeBack>
          </div>
          <NavbarProfileImgBack>
            <NavbarProfileImg
              onClick={() => navigate("/profile")}
              src={user?.photoURL ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
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
