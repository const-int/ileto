import React from "react";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function AboutButton() {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      About
    </button>
  );
}

export default AboutButton;
