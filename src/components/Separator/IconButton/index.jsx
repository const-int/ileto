import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import useStyles from "./useStyles";

function IconButton({ icon, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        onClick={onClick}
        classes={{ label: classes.label, root: classes.root }}
      >
        {icon}
      </Button>
    </div>
  );
}

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
