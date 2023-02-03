import axios from "axios";
import React, { useRef, useState } from "react";
import Loading from "../../Pages/LoadingPage/Loading";
import { SettingsOuter, HeaderOuter, Header, SettingsDashboard, SettingsButtons } from "./SettingsStyles";

const Settings = () => {
    const [loading, setLoading] = useState(false);

    console.log("Settings Page");

    return (
        <>
            <SettingsOuter>
                <SettingsDashboard>
                    <HeaderOuter>
                        <Header>Settings</Header>
                    </HeaderOuter>
                    <SettingsButtons></SettingsButtons>
                </SettingsDashboard>
            </SettingsOuter>
        </>
    );
};

export default Settings;
