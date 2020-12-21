import React from "react";
import BackButton from "./BackButton";
import Label from "./Label";
import SearchButton from "./SearchButton";
import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BackButton />
      <Label text="Source currency" />
      <SearchButton />
    </div>
  );
}

export default Header;
