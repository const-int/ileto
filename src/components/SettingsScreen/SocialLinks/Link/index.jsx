import React from "react";
import useStyles from "./useStyles";

function Link({ label, icon, href }) {
  const classes = useStyles();

  return (
    <a href={href} className={classes.root}>
      <img src={icon} alt="label" />
      <span className={classes.label}>{label}</span>
    </a>
  );
}

Link.propTypes = {};

export default Link;
