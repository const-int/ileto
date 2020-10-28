import React from "react";
import useStyles from "./useStyles";

function Headline() {
  const classes = useStyles();

  return <div className={classes.root}>Currency Exchange</div>;
}

export default Headline;
