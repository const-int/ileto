import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/ClearButton/useStyles";
import { Button } from "@material-ui/core";

function ClearButton({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={onClick} className={classes.root}>
        C
      </Button>
    </div>
  );
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClearButton;
