import { createGlobalStyle } from "styled-components";

const darkModePalette = {
  black: "#0a0a0aff",
  lightBlack: "#1a181aff",
  grey: "rgb(31, 29, 31)",
  pink: "rgba(166, 63, 203, 0.1);",
  olive: "#434038ff",
  white: "#eee3c1ff",
  purple: "#a63fcb",
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

const spillPalette = {
  lightblue: "rgb(51, 102, 153)",
  lightestblue: "rgb(126, 167, 228)",
  blue: "rgb(53, 106, 157)",
  yellow: "rgb(255, 204, 0)",
  black: "rgb(0, 0, 0)",
  grey: "rgb(31, 29, 31)",
};

const lightPalette = {
  black: "",
  lightBlack: "",
  grey: "rgb(230, 230, 230)",
  lightgrey: "rgba(166, 63, 203, 0.1)",
  pink: "",
  olive: "",
  white: "",
};

export const lightTheme = {
  currentTheme: "lightTheme",

  black: "",
  lightBlack: "",
  grey: "",
  lightgrey: "rgba(166, 63, 203, 0.1)",
  pink: "",
  olive: "",
  white: "",

  body: {
    background: "rgb(247, 247, 247)",
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
    background: "rgb(240, 240, 240)",
    backgroundColor: lightPalette.grey,
    accentColor: lightPalette.lightgrey,
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
    entryHeader: "black",
    entryText: "rgb(80, 80, 80)",
    counter: "rgb(80, 80, 80)",
  },
  contentRight: {
    backgroundColor: lightPalette.grey,
    accentColor: lightPalette.lightgrey,
  },
  search: {
    fontColor: lightPalette.white,
  },
};
export const darkTheme = {
  currentTheme: "darkTheme",

  black: "#0a0a0aff",
  lightBlack: "#1a181aff",
  grey: "rgb(31, 29, 31)",
  lightgrey: "rgb(33, 31, 33)",
  pink: "rgba(166, 63, 203, 0.1)",
  olive: "#434038ff",
  white: "#eee3c1ff",
  purple: "#a63fcb",

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
    backgroundColor: "#1c1c1c",
    accentColor: "#2c2c2c",
    buttonBorder: darkModePalette.purple,
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
    counter: "rgba(130, 130, 130, 1)",
  },
  contentRight: {
    backgroundColor: "#1c1c1c",
    accentColor: "#1f1f1f",
  },
  search: {
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
    backgroundColor: hotDogPalette.red,
    accentColor: "rgb(229, 22, 0)",
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
    counter: hotDogPalette.yellow,
    entryText: "rgb(255, 213, 26)",
    entryHeader: hotDogPalette.yellow,
  },
  contentRight: {
    backgroundColor: hotDogPalette.red,
    accentColor: "rgb(229, 22, 0)",
  },
  search: {
    fontColor: hotDogPalette.yellow,
  },
};

export const spillTheme = {
  currentTheme: "spillTheme",

  black: "rgb(0, 0, 0)",
  grey: "rgb(31, 29, 31)",
  lightblue: "rgb(51, 102, 153)",
  blue: "rgb(53, 106, 157)",
  yellow: "rgb(255, 204, 0)",

  body: {
    background: spillPalette.lightblue,
  },
  navbar: {
    fontColor: spillPalette.black,
    fontColor2: "white",
    line: "rgba(0, 0, 0, 1)",
    underline: spillPalette.yellow,
  },
  content: {
    background: spillPalette.blue,
    filter: spillPalette.yellow,
  },
  homepageCard: {
    fontColor: spillPalette.black,
    background: spillPalette.yellow,
    border: " rgba(0, 0, 0, 1)",
    episodeLineLeft: spillPalette.blue,
    episodeLineRight: spillPalette.lightestblue,
    ProgressLineLeft: spillPalette.blue,
    ProgressLineRight: spillPalette.lightestblue,
  },
  sidebar: {
    background: spillPalette.yellow,
    search: spillPalette.yellow,
    backgroundColor: spillPalette.yellow,
    accentColor: "rgb(255, 213, 26)",
  },
  animeCard: {
    background: spillPalette.yellow,
    fontColor: spillPalette.black,
    border: "1px solid rgba(200, 200, 200, 1)",
  },
  scrollbar: {
    /* background: "rgb(40, 38, 40)", */
    background: spillPalette.lightblue,
  },
  chartCard: {
    fontColor: "black",
    fontColor2: "white",
    counter: "rgba(130, 130, 130, 1)",
  },
  contentRight: {
    backgroundColor: spillPalette.yellow,
    accentColor: "rgb(255, 213, 26)",
  },
  search: {
    fontColor: spillPalette.black,
  },
};

export const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${(props) => props.theme.body.background};
        color: ${(props) => props.theme.navbar.fontColor};
        
       // background: repeating-linear-gradient(45deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px);

      background: ${(props) =>
        props.theme.currentTheme === "spillTheme" &&
        `repeating-linear-gradient(-65deg,${props.theme.blue} 0 30px,${props.theme.lightblue} 25px 60px)`};
    }
    /* "repeating-linear-gradient(296deg,#606dbc,#606dbc 10px,#465298 10px,#465298 20px)" */

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
    
`;
