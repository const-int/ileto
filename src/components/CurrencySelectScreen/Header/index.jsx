import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import BackButton from "./BackButton";
import Label from "./Label";
import useStyles from "./useStyles";

function Header() {
  const { menu } = useContext(MenuContext);
  const classes = useStyles();
  const type = menu === "sourceCurrencySelect" ? "source" : "target";

  return (
    <div className={classes.root}>
      <Label text={`Select ${type} currency`} />
      <BackButton />
    </div>
  );
}

export default Header;
