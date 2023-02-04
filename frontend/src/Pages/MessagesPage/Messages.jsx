import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../../Pages/LoadingPage/Loading";
import { MessagesOuter, HeaderOuter, Header } from "./MessagesStyles";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

const Messages = () => {
    const [loading, setLoading] = useState(false);

    console.log("Messages Page");

    return (
        <>
            <Sidebar />
            <MessagesOuter>
                <HeaderOuter>
                    <Header>Your Messages</Header>
                </HeaderOuter>
            </MessagesOuter>
        </>
    );
};

export default Messages;
