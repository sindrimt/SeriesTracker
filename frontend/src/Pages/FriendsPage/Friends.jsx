import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../../Pages/LoadingPage/Loading";
import { FriendsOuter, HeaderOuter, Header } from "./FriendsStyles";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

const Friends = () => {
    const [loading, setLoading] = useState(false);

    console.log("Friends Page");

    return (
        <>
            <Sidebar />
            <FriendsOuter>
                <HeaderOuter>
                    <Header>Your Friends</Header>
                </HeaderOuter>
            </FriendsOuter>
        </>
    );
};

export default Friends;
