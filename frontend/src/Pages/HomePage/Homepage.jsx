import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Content from "../../Components/Content/Content.jsx";
import Login from "../../Pages/LoginPage/Login.jsx";
import "../../Styles/app.css";
import ContentRight from "../../Components/ContentRight/ContentRight.jsx";

import { useAuth } from "../../firebase";

const Home = () => {
  const currentUser = useAuth();

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
