import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Button } from "@material-ui/core";
import useStyles from "./useStyles";

function IconButton({ icon, className, onClick }) {
  const classes = useStyles();

  return (
    <Button className={classnames(classes.root, className)} onClick={onClick}>
      {icon}
    </Button>
  );
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

IconButton.defaultProps = {
  className: "",
  style: {},
  onClick: () => {},
};

export default IconButton;
