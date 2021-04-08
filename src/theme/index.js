import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
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
  color: {
    primary: "#FB772F",
    background: "#FFFFFF",
    backgroundAlt: "#F7F9FA",
    foreground: "#484644",
    foregroundLight: "#B2AFAB",
    foregroundSecondary: "#929199",
    fieldBackground: "#F4F4F4",
    fieldForeground: "#666666",
    activeBackground: "#FEE4D5",
    activeBackground2: "#FCA06D",
    flagBorder: "#D1D1D1",
  },
});

export default Theme;
