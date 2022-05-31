import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Content from "./Components/Content/Content.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";
import "./Styles/app.css";
import ContentRight from "./Components/ContentRight/ContentRight.jsx";
import Homepage from "./Pages/HomePage/Homepage";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";

import { useAuth } from "./firebase.js";

const App = () => {
  const currentUser = useAuth();

  return (
    <BrowserRouter>
      {currentUser ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default App;
