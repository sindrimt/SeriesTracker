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

import { getUser, postUser, postSerie, getSerie } from "../../axios/axios";

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

  const handlePostSerie = () => {
    postSerie({
      connectedTo: "sindrimt",
      series: {
        title: "naruto",
        description: "so shit",
        rating: 1,
        photoUrl: "http://dogwater.png",
        episodesWatched: 1,
        episodeCount: 999,
        watchTime: "01:00",
      },
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
          <button onClick={handlePost}>post</button>
          <button onClick={handleGet}>get</button>
          <button onClick={handlePostSerie}>postserie</button>
          <button onClick={handleGetSerie}>getserie</button>
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
