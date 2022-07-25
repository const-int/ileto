import React from "react";
import AppIconSvg from "./img/app-icon.svg";
import useStyles from "./useStyles";

function AboutContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <img
          className={classes.icon}
          src={AppIconSvg}
          alt="App Icon"
          width={38}
        />
        <div>
          <div className={classes.version}>Version 1.0 (build 1)</div>
          <div className={classes.status}>Beta</div>
        </div>
      </div>

      <div className={classes.description}>
        The easiest currency exchanger app ever! Easily convert any world
        currency in a matter of seconds
      </div>
    </div>
  );
}

AboutContent.propTypes = {};

export default AboutContent;
