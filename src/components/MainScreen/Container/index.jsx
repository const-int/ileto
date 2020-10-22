import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useStyles from "./useStyles";

function Container({ className, children, isHidden }) {
  const classes = useStyles({ isHidden });

  return <div className={classNames(classes.root, className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  isHidden: PropTypes.bool,
};

Container.defaultProps = {
  className: "",
  isHidden: false,
};

export default Container;
