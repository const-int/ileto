import React from "react";
import CloseButton from "./CloseButton";
import Label from "./Label";
import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Label text="Settings" />
      <CloseButton />
    </div>
  );
}

export default Header;
