import React from "react";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function SettingsButton() {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      Settings
    </button>
  );
}

export default SettingsButton;
