import React from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Content from "./Components/Content/Content.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";
import "./Styles/app.css";
import ContentRight from "./Components/ContentRight/ContentRight.jsx";

import { useAuth } from "./firebase.js";

const App = () => {
  const currentUser = useAuth();

  return (
    <>
      {currentUser ? (
        <>
          <Navbar />
          <Sidebar />
          <Content />
          <ContentRight />
        </>
      ) : (
        <Login />
      )}
      {/*  <Login /> */}
      {/* <Navbar />
      <Sidebar />
      <Content />

      <ContentRight />
      {/* <Profile /> */}

    </>
  );
};

export default App;
