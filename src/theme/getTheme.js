import { createMuiTheme } from "@material-ui/core/styles";

function getTheme(isDarkMode) {
  const lightColors = {
    primary: "#0658FF",
    background: "#FFFFFF",
    foreground: "#484644",
    foregroundLight: "#B2AFAB",
    foregroundSecondary: "#626167",
    fieldBackground: "#F4F4F4",
    fieldForeground: "#000000",
    activeBackground: "#FBFBFB",
    activeBackground2: "#EFEEF4",
    flagBorder: "#D1D1D1",
    buttonBackground: "#F1F1F1",
    dialBackground: "#EFEEF4",
    menuHeaderBackground: "#EFEEF4",
    menuHeaderForeground: "#0658FF",
    boardBackground: "#FFFFFF",
    separator: "#EFEEF4"
  }

  const darkColors = {
    primary: "#35E1FF",
    background: "#002F48",
    foreground: "#FFFFFF",
    foregroundLight: "#B2AFAB",
    foregroundSecondary: "#a0bfda",
    fieldBackground: "#F4F4F4",
    fieldForeground: "#FFFFFF",
    buttonBackground: "#134772",
    activeBackground: "#093b56",
    activeBackground2: "#145090",
    flagBorder: "#D1D1D1",
    dialBackground: "#002F48",
    boardBackground: "#205FA1",
    menuHeaderForeground: "#FFFFFF",
    menuHeaderBackground: "#205FA1",
    separator: "#023652"
  }

  return createMuiTheme({
    isDarkMode,
    props: {
      MuiButtonBase: {
        disableRipple: true
      },
    },
    typography: {
      fontFamily: [
        'Lato',
        'sans-serif',
      ].join(','),
    },
    font: {
      primary: "Lato, sans-serif",
    },
    indent: {
      sidePadding: 14,
      sidePaddingLarge: 24,
    },
    color: isDarkMode ? darkColors : lightColors,
  });
};

export default getTheme;
