import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useStyles from "./useStyles";

function Container({ className, children }) {
  const classes = useStyles();

  return <div className={classNames(classes.root, className)}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
