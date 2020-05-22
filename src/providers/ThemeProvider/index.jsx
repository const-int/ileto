import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as JssThemeProvider } from "react-jss";
import theme from "../../theme";

function ThemeProvider({ children }) {
  return <JssThemeProvider theme={theme}>{children}</JssThemeProvider>;
}

ThemeProvider.defaultProps = {
  children: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ThemeProvider;
