import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useStyles from "./useStyles";

function CircleButton({ onClick, icon, className, isActive, ...props }) {
  const classes = useStyles({ isActive });

  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames(classes.root, className)}
      {...props}
    >
      {icon}
    </button>
  );
}

CircleButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

CircleButton.defaultProps = {
  isActive: false,
};

export default CircleButton;
