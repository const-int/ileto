import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import BackButton from "./BackButton";
import Label from "./Label";
import useStyles from "./useStyles";

function Header() {
  const { menu } = useContext(MenuContext);
  const classes = useStyles();
  const title = {
    [menu === "sourceCurrencySelect"]: "Converting from...",
    [menu === "targetCurrencySelect"]: "Converting to...",
  }.true;

  return (
    <div className={classes.root}>
      <Label text={title} />
      <BackButton />
    </div>
  );
}

export default Header;
