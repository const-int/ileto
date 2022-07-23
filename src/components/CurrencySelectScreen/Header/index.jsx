import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import CloseButton from "./CloseButton";
import Label from "./Label";
import useStyles from "./useStyles";

function Header() {
  const { menu } = useContext(MenuContext);
  const classes = useStyles();
  const title = {
    [menu === "sourceCurrencySelect"]: "Converting from",
    [menu === "targetCurrencySelect"]: "Converting to",
  }.true;

  return (
    <div className={classes.root}>
      <Label text={title} />
      <CloseButton />
    </div>
  );
}

export default Header;
