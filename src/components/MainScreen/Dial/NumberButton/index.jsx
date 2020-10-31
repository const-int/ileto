import React from "react";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function NumberButton({ label, onClick }) {
  const classes = useStyles();

  return (
    <button className={classes.root} onClick={onClick} type="button">
      <span className={classes.label}>{label}</span>
    </button>
  );
}

NumberButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberButton;
