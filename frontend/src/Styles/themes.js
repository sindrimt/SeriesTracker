import { createGlobalStyle } from "styled-components";

const darkModePalette = {
  pink: "#F4ABC4",
  dark1: "#595B83",
  dark2: "#333456",
  dark3: "#060930",
};

export const lightTheme = {
  content: {
    background: darkModePalette.dark2,
  },
  homepageCard: {
    background: darkModePalette.dark1,
  },
};
export const darkTheme = {
  body: "black",
  font: "30px",
  sidebarBg: "black",
};

export const GlobalStyles = createGlobalStyle`
    body {
        /* background-color: ${(props) => props.theme.body};
        font-size: ${(props) => props.theme.font}; */
    }
`;
