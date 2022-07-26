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

  console.log(LocalStorageUtils.get(LOCAL_STORAGE_KEY)?.isDarkMode);

  useEffect(() => {
    document.addEventListener("updateTheme", (e) => {
      setIsDarkMode(e.detail.isDarkMode);
      LocalStorageUtils.set(LOCAL_STORAGE_KEY, {
        isDarkMode: e.detail.isDarkMode,
      });
    });
  }, []);

  return (
    <MuiThemeProvider theme={getTheme(isDarkMode)}>{children}</MuiThemeProvider>
  );
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
