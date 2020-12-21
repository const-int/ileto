import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import ChevronIcon from "./ChevronIcon";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function Currency({ value }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});
  const { shortName, name } = value;
  const { setMenu } = useContext(MenuContext);

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      onClick={() => setMenu("currencySelect")}
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
