import React from "react";
import ChevronIcon from "./ChevronIcon";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function Currency({ value }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});
  const { shortName, name } = value;

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      <div className={classes.currencyCode}>
        <span>{value.code}</span>

        <ChevronIcon />
      </div>
      <div className={classes.currencyName}>{shortName || name}</div>
    </button>
  );
}

export default Currency;
