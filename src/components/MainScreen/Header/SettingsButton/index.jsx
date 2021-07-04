import React, { useContext } from "react";
import classnames from "classnames";
import MenuContext from "context/MenuContext";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function SettingsButton() {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});
  const { setMenu } = useContext(MenuContext);

  function handleClick() {
    setMenu("settings");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      Settings
    </button>
  );
}

export default SettingsButton;
