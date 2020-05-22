import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Container/useStyles";

function Container({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

Container.defaultProps = {
  children: null,
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
