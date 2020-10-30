import React from "react";
import useStyles from "./useStyles";

function AboutButton() {
  const classes = useStyles();

  return <button className={classes.root}>About</button>;
}

export default AboutButton;
