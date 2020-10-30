import React from "react";
import Icon from "./Icon";
import Headline from "./Headline";
import AboutButton from "./AboutButton";
import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon />
      <Headline />
      <AboutButton />
    </div>
  );
}

export default Header;
