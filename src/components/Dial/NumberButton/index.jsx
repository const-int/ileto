import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/NumberButton/useStyles";
import { Button } from "@material-ui/core";

function NumberButton({ label, onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={onClick}>
        {label}
      </Button>
    </div>
  );
}

NumberButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberButton;
