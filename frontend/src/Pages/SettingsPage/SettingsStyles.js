import styled from "styled-components";

export const SettingsOuter = styled.div`
    display: relative;
    width: 100vw;
    min-height: 100vh;
    align-items: center;
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    grid-template-columns: repeat(20, 1fr);
    background-color: lightgray;
    font-family: "Anek Malayalam", sans-serif;
`;

export const SettingsDashboard = styled.div`
    grid-column: 2 / 14;
    grid-row: 6 / 14;
    height: 100%;
    width: 100%;
    background-color: lightgray;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
`;

export const HeaderOuter = styled.div`
    background-color: papayawhip;
    width: 100%;
`;

export const Header = styled.div`
    background-color: lightcoral;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgb(60, 60, 60);
    padding: 10px;
    padding-left: 20px;
`;

export const SettingsButtons = styled.div``;
