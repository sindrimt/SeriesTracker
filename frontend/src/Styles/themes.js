import { createGlobalStyle } from "styled-components";

const darkModePalette = {
  black: "#0a0a0aff",
  lightBlack: "#1a181aff",
  grey: "rgb(31, 29, 31)",
  pink: "rgba(166, 63, 203, 0.1);",
  olive: "#434038ff",
  white: "#eee3c1ff",
};

const hotDogPalette = {
  red: "rgb(242, 35, 0)",
  yellow: "rgb(251, 251, 0)",
  darkYellow: "rgb(240, 240, 10)",
  brown: "rgb(74, 65, 42)",
  green: "green",
  magenta: "rgb(255, 0, 255)",
  olive: "rgb(128,128,0)",
};

export const lightTheme = {
  black: "",
  lightBlack: "",
  grey: "",
  lightgrey: "rgba(166, 63, 203, 0.1)",
  pink: "",
  olive: "",
  white: "",

  body: {
    background: "white",
  },
  navbar: {
    fontColor: "",
    line: "rgba(137, 137, 137, 0.15)",
    underline: "rgba(166, 63, 203, 1)",
  },
  content: {
    background: "white",
    filter: "",
  },
  homepageCard: {
    fontColor: "",
    background: "white",
    border: " rgba(0, 0, 0, 0.1)",
    episodeLineLeft: "#a63fcb",
    episodeLineRight: "rgba(201, 201, 201, 0.8)",
    ProgressLineLeft: "#a63fcb",
    ProgressLineRight: "rgba(201, 201, 201, 0.8)",
  },
  sidebar: {
    background: "",
  },
  animeCard: {
    fontColor: "",
    background: "#fafafa",
    border: "1px solid rgba(200, 200, 200, 0.2)",
  },
  scrollbar: {
    background: "#aaaaaa",
  },
  chartCard: {
    fontColor: "black",
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
    line: "rgba(137, 137, 137, 0.15)",
    underline: "rgba(166, 63, 203, 1)",
  },
  content: {
    background: darkModePalette.dark2,
    filter: darkModePalette.white,
  },
  homepageCard: {
    fontColor: "",
    background: darkModePalette.grey,
    border: " rgba(0, 0, 0, 0.1)",
    episodeLineLeft: "#a63fcb",
    episodeLineRight: "rgba(201, 201, 201, 0.8)",
    ProgressLineLeft: "#a63fcb",
    ProgressLineRight: "rgba(201, 201, 201, 0.8)",
  },
  sidebar: {
    background: darkModePalette.grey,
    search: darkModePalette.grey,
  },
  animeCard: {
    fontColor: "",
    background: darkModePalette.grey,
    border: "1px solid rgba(200, 200, 200, 0.2)",
  },
  scrollbar: {
    background: "rgb(40, 38, 40)",
  },
  chartCard: {
    fontColor: darkModePalette.white,
  },
};

export const hotDogTheme = {
  red: "rgb(242, 35, 0)",
  yellow: "rgb(251, 251, 0)",
  brown: "rgb(74, 65, 42)",

  body: {
    background: hotDogPalette.yellow,
  },
  navbar: {
    fontColor: hotDogPalette.red,
    line: "rgba(0, 0, 0, 1)",
    underline: hotDogPalette.red,
  },
  content: {
    background: hotDogPalette.yellow,
    filter: hotDogPalette.red,
  },
  homepageCard: {
    fontColor: hotDogPalette.yellow,
    background: hotDogPalette.red,
    border: " rgba(0, 0, 0, 1)",
    episodeLineLeft: hotDogPalette.yellow,
    episodeLineRight: hotDogPalette.olive,
    ProgressLineLeft: hotDogPalette.yellow,
    ProgressLineRight: hotDogPalette.olive,
  },
  sidebar: {
    background: hotDogPalette.yellow,
    search: hotDogPalette.yellow,
  },
  animeCard: {
    background: hotDogPalette.red,
    fontColor: hotDogPalette.yellow,
    border: "1px solid rgba(200, 200, 200, 1)",
  },
  scrollbar: {
    /* background: "rgb(40, 38, 40)", */
    background: hotDogPalette.red,
  },
  chartCard: {
    fontColor: hotDogPalette.yellow,
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
