import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
  font: {
    primary: "Lato, sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  color: {
    primary: "#FB772F",
    ripple: "#BBBBBB",
  }
});

export default Theme;
