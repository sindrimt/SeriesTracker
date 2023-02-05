import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Content from "./Components/Content/Content.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";
import Settings from "./Pages/SettingsPage/Settings.jsx";
import Friends from "./Pages/FriendsPage/Friends.jsx";
import Messages from "./Pages/MessagesPage/Messages.jsx";

import "./Styles/app.css";
import ContentRight from "./Components/ContentRight/ContentRight.jsx";
import Homepage from "./Pages/HomePage/Homepage";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";

import { useAuth } from "./firebase.js";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./redux/features/user/userSlice";

import styled, { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, hotDogTheme, spillTheme, GlobalStyles } from "./Styles/themes.js";

import axios from "axios";
import Loading from "./Pages/LoadingPage/Loading";

const App = () => {
    const currentUser = useAuth();
    const [done, setDone] = useState(false);

    const colorTheme = useSelector((state) => state.theme.theme);

    const globalUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (currentUser) {
    //         fetchUser();
    //     } else {
    //         //setTimeout(500);
    //         //setDone(!done);
    //     }
    // }, [currentUser]);

    const fetchUser = () => {
        axios
            .get(`api/users/${currentUser?.uid}`)
            .then(({ data }) => {
                dispatch(loginUser(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const chooseColorTheme = () => {
        if (colorTheme === "light") return lightTheme;
        else if (colorTheme === "dark") return darkTheme;
        else if (colorTheme === "hotDog") return hotDogTheme;
        else if (colorTheme === "spill") return spillTheme;
    };

    if (sessionStorage.getItem("myPage.expectSignIn")) {
        return (
            <>
                <Loading />
            </>
        );
    }

    return (
        <ThemeProvider theme={chooseColorTheme()}>
            <>
                <GlobalStyles />
                <BrowserRouter>
                    {currentUser ? (
                        <>
                            <Navbar />
                            <Sidebar />
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/create-post" element={<CreatePost />} />
                                <Route path="/" element={<Homepage />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/friends" element={<Friends />} />
                                <Route path="/messages" element={<Messages />} />
                            </Routes>
                        </>
                    ) : (
                        <Login />
                    )}
                </BrowserRouter>
            </>
        </ThemeProvider>
    );
};

export default App;
