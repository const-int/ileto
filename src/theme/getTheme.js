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
  }

  const darkColors = {
    primary: "#FB772F",
    background: "#FFFFFF",
    foreground: "#484644",
    foregroundLight: "#B2AFAB",
    foregroundSecondary: "#929199",
    fieldBackground: "#F4F4F4",
    fieldForeground: "#666666",
    activeBackground: "#FEE4D5",
    activeBackground2: "#FCA06D",
    flagBorder: "#D1D1D1",
    dialBackground: "#002F48",
  }

  return createMuiTheme({
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
