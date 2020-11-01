import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useStyles from "./useStyles";

function NumberButton({ label, onClick }) {
  const classes = useStyles();
  const [isActive, setActive] = useState(false);

  function handleClick() {
    onClick();
    setActive(true);

    setTimeout(() => {
      setActive(false);
    }, 250);
  }

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      onClick={handleClick}
    >
      <span className={classes.label}>{label}</span>
    </button>
  );
}

NumberButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberButton;
