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
                            <Header>User settings</Header>
                        </HeaderOuter>
                        <SettingsButtons>
                            <SettingsButton>
                                Change <br></br> Password
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Email
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Username
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Profile Picture
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Banner Picture
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Bio
                            </SettingsButton>
                            <SettingsButton>
                                Change <br></br> Favorite Anime
                            </SettingsButton>
                        </SettingsButtons>
                    </Dashboard>
                </DashboardContainer>
            </SettingsOuter>
        </>
    );
};

export default Settings;
