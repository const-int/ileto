import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/BackspaceButton/useStyles";
import { Button } from "@material-ui/core";
import BackspaceSvg from "./img/backspace.svg";

function BackspaceButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.root}>
      <img src={BackspaceSvg} className={classes.img} alt="Backspace" />
    </Button>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackspaceButton;
