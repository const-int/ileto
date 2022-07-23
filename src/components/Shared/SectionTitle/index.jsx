import React from "react";
import useStyles from "./useStyles";

function SectionTitle({ text }) {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
}

export default SectionTitle;
