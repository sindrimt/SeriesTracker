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

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const globalUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

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
    dispatch(logoutUser());
    logOut();
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
        <Logo src={SeriesTrackerLogo} alt="Logo" onClick={() => navigate("/")} />
        <NavbarLinksOuter>
          <div className="findsSeries">Find Series</div>
          <div className="findfriends">Find Friends</div>
          {/*  <button onClick={() => console.log(globalUser)}>check</button> */}
        </NavbarLinksOuter>
        <NavbarProfileOuter>
          <div>
            {/* <NavbarProfileImg
              src="api/uploads/1654538220742klistremerker-glad-smiley-emoticon-face.jpg.jpg"
              alt="bilde"
            /> */}
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
