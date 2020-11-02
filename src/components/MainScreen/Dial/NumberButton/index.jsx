import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function NumberButton({ label, onClick }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(onClick);

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
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
