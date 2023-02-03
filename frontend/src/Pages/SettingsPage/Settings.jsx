import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../../Pages/LoadingPage/Loading";
import {
    SettingsOuter,
    HeaderOuter,
    Header,
    DashboardContainer,
    Dashboard,
    SettingsButtons,
    SettingsButton,
} from "./SettingsStyles";
import Sidebar from "../../Components/Sidebar/Sidebar.jsx";

const Settings = () => {
    const [loading, setLoading] = useState(false);

    console.log("Settings Page");

    return (
        <>
            <Sidebar />
            <SettingsOuter>
                <DashboardContainer>
                    <Dashboard>
                        <HeaderOuter>
                            <Header>Settings</Header>
                        </HeaderOuter>
                        <SettingsButtons>
                            <SettingsButton>Change Password</SettingsButton>
                            <SettingsButton>Change Email</SettingsButton>
                            <SettingsButton>Change Username</SettingsButton>
                            <SettingsButton>Change Profile Picture</SettingsButton>
                            <SettingsButton>Change Banner Picture</SettingsButton>
                            <SettingsButton>Change Bio</SettingsButton>
                            <SettingsButton>Change Theme</SettingsButton>
                        </SettingsButtons>
                    </Dashboard>
                </DashboardContainer>
            </SettingsOuter>
        </>
    );
};

export default Settings;
