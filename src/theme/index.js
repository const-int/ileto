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
  },
  color: {
    primary: "#FB772F",
    background: "#FFFFFF",
    foreground: "#484644",
    foregroundLight: "#B2AFAB",
    fieldBackground: "#F4F4F4",
    fieldForeground: "#666666",
    // ripple: "#DAD7D4",
  },
});

export default Theme;
