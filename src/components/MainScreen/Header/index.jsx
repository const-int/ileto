import React from "react";
import Icon from "./Icon";
import Headline from "./Headline";
import CleanButton from "./ClearButton";
import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon />
      <Headline />
      <CleanButton />
    </div>
  );
}

export default Header;
