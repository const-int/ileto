import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LocalStorageUtils from "utils/LocalStorageUtils";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import getTheme from "../../theme/getTheme.js";

function ThemeProvider({ children }) {
  const LOCAL_STORAGE_KEY = "is_dark_mode";
  const [isDarkMode, setIsDarkMode] = useState(
    LocalStorageUtils.get(LOCAL_STORAGE_KEY)?.isDarkMode || false
  );

  const theme = getTheme(isDarkMode);

  function setDocumentThemeColor(themeColor) {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute("content", themeColor);
    document
      .querySelector("meta[name='msapplication-TileColor']")
      .setAttribute("content", themeColor);
  }

  useEffect(() => {
    document.addEventListener("updateTheme", (e) => {
      setIsDarkMode(e.detail.isDarkMode);
      LocalStorageUtils.set(LOCAL_STORAGE_KEY, {
        isDarkMode: e.detail.isDarkMode,
      });
      setDocumentThemeColor(
        getTheme(e.detail.isDarkMode).color.menuHeaderBackground
      );
    });

    setDocumentThemeColor(theme.color.menuHeaderBackground);
  }, []);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
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
