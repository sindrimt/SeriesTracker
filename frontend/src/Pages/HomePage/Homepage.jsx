import React, { useEffect, useState } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Content from "../../Components/Content/Content.jsx";
import Login from "../../Pages/LoginPage/Login.jsx";
import "../../Styles/app.css";
import ContentRight from "../../Components/ContentRight/ContentRight.jsx";

import { useAuth } from "../../firebase";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/features/user/userSlice";

import { getUser } from "../../axios/axios";
import axios from "axios";

const Home = () => {
  const currentUser = useAuth();
  const [done, setDone] = useState(false);

  const globalUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      fetchUser();
    } else {
      setTimeout(200);
      setDone(!done);
    }
  }, [done]);

  const fetchUser = () => {
    console.log("HOMEPAGE USER UID: " + currentUser?.uid);

    axios
      .get(`api/users/${currentUser?.uid}`)
      .then(({ data }) => {
        console.log(data);
        dispatch(loginUser(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {currentUser ? (
        <>
          <Sidebar />
          <Content />
          <ContentRight />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
