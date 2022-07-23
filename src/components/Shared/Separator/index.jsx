import React from "react";
import useStyles from "./useStyles";

function Separator({ marginTop }) {
  const classes = useStyles();

  return <div style={{ marginTop }} className={classes.root} />;
}

Separator.propTypes = {};

export default Separator;
