import React from "react";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function Label({ text }) {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
