import React, { useState, useEffect } from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";
import Content from "../../Components/Content/Content.jsx";
import Login from "../../Pages/LoginPage/Login.jsx";
import "../../Styles/app.css";
import ContentRight from "../../Components/ContentRight/ContentRight.jsx";
import Loading from "../LoadingPage/Loading";

import { useAuth } from "../../firebase";
import axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [series, setSeries] = useState([]);
    const [done, setDone] = useState(false);

    const currentUser = useAuth();

    const getUserSeries = () => {
        setLoading(true);
        console.log(currentUser);
        axios
            .get(`api/series/${currentUser?.uid}`)
            .then(({ data }) => {
                setSeries(data);
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
            getUserSeries();
        } else {
            setTimeout(() => {
                setDone(!done);
            }, 100);
        }
    }, [done]);

    if (loading) {
        return <Loading />;
    }

    //TODO: Legg til api request user posts her => pass down resultatet til content, og lenge til contentRight

    return (
        <>
            {currentUser ? (
                <>
                    <Sidebar />
                    <Content series={series} />
                    <ContentRight arrayLength={series.length} />
                </>
            ) : (
                <Login />
            )}
        </>
    );
};

export default Home;
