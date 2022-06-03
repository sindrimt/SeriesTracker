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

import { logOut, useAuth, getUserData } from "../../firebase.js";
import { useNavigate } from "react-router-dom";

import { getUser, postUser, postSerie, getSerie, putUser } from "../../axios/axios";
import axios from "axios";

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

  const handlePost = () => {
    postUser({
      _id: "2342sfsssss1312321",
      username: "marc3",
      email: "sindrimt@gmail.com",
      series: [
        {
          title: "One Piece",
          description: "Super good!!",
          rating: 8,
          photoUrl: "http://fsfdsfsfdsfsd.jpg",
          episodesWatched: 76,
          episodesCount: 230,
          watchTime: "18:23",
        },
      ],
    });
  };

  const handleGet = () => {
    getUser();
  };

  const handleGetSerie = () => {
    getSerie();
  };

  //TODO: does not work idk why
  const handlePutUser = async () => {
    await axios
      .put("/api/users/2342sfs1312321", { username: "test" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePostSerie = () => {
    postSerie({
      username: "testqe13131231",
      title: "testtitle",
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
          <button onClick={handlePostSerie}>post</button>
          <button onClick={handleGet}>get</button>
          <button onClick={handlePutUser}>putUser</button>
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
