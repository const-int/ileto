import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useStyles from "./useStyles";

function IconButton({ icon, size, className, onClick }) {
  const classes = useStyles();
  const buttonClasses = classNames(classes.root, `is-${size}`, className);

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {icon}
    </button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: "",
  size: "md",
  onClick: () => {},
};

export default IconButton;
