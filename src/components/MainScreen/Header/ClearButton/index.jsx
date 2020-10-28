import React from "react";
import useStyles from "./useStyles";

function ClearButton() {
  const classes = useStyles();

  return <button className={classes.root}>Clear</button>;
}

export default ClearButton;
