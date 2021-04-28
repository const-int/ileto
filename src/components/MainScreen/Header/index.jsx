import React from "react";
import Icon from "./Icon";
import Headline from "./Headline";
import SettingsButton from "./SettingsButton";
import useStyles from "./useStyles";

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Icon />
      <Headline />
      <SettingsButton />
    </div>
  );
}

export default Header;
