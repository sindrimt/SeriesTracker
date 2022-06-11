import { createGlobalStyle } from "styled-components";

const darkModePalette = {
  black: "#0a0a0aff",
  lightBlack: "#1a181aff",
  grey: "rgb(31, 29, 31)",
  pink: "rgba(166, 63, 203, 0.1);",
  olive: "#434038ff",
  white: "#eee3c1ff",
};

export const lightTheme = {
  black: "",
  lightBlack: "",
  grey: "",
  lightgrey: "",
  pink: "",
  olive: "",
  white: "",

  body: {
    background: "white",
  },
  navbar: {
    fontColor: "",
  },
  content: {
    background: "white",
    filter: "",
  },
  homepageCard: {
    background: "white",
  },
  sidebar: {
    background: "",
  },
  animeCard: {
    background: "#fafafa",
  },
  scrollbar: {
    background: "#aaaaaa",
  },
};
export const darkTheme = {
  black: "#0a0a0aff",
  lightBlack: "#1a181aff",
  grey: "rgb(31, 29, 31)",
  lightgrey: "rgb(33, 31, 33)",
  pink: "rgba(166, 63, 203, 0.1)",
  olive: "#434038ff",
  white: "#eee3c1ff",

  body: {
    background: darkModePalette.lightBlack,
  },
  navbar: {
    fontColor: darkModePalette.white,
  },
  content: {
    background: darkModePalette.dark2,
    filter: darkModePalette.white,
  },
  homepageCard: {
    background: darkModePalette.grey,
  },
  sidebar: {
    background: darkModePalette.grey,
    search: darkModePalette.grey,
  },
  animeCard: {
    background: darkModePalette.grey,
  },
  scrollbar: {
    background: "rgb(40, 38, 40)",
  },
};

export const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${(props) => props.theme.body.background};
        color: ${(props) => props.theme.navbar.fontColor};
        
    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
        background-color: ${(props) => props.theme.scrollbar.background};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #717171;
        border: 4px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        border-radius: 9999px;
    }
    }
`;
