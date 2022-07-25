import React, { useState } from "react";
import classnames from "classnames";
import useStyles from "./useStyles";

function AppearanceOptions() {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const isDarkMode = false;

  function handleClick(isDarkMode) {
    if (isActive) {
      return;
    }

    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 150);
  }

  return (
    <div className={classes.root}>
      <button type="button" className={classes.button} onClick={handleClick}>
        <div className={classes.title}>
          <div
            className={classnames(
              classes.themeBlock,
              "is-light",
              !isDarkMode && "is-selected"
            )}
          ></div>
          <div className={classes.label}>Light</div>
        </div>

        {!isDarkMode && (
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.5L5.81345 13L16 1"
              stroke="#0658FF"
              stroke-width="2"
            />
          </svg>
        )}
      </button>

      <button type="button" className={classes.button} onClick={handleClick}>
        <div className={classes.title}>
          <div
            className={classnames(
              classes.themeBlock,
              "is-dark",
              isDarkMode && "is-selected"
            )}
          ></div>
          <div className={classes.label}>Dark</div>
        </div>

        {isDarkMode && (
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7.5L5.81345 13L16 1"
              stroke="#0658FF"
              stroke-width="2"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

AppearanceOptions.propTypes = {};

export default AppearanceOptions;
