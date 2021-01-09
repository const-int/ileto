import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import ChevronIcon from "./ChevronIcon";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function Currency({ value, type }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});
  const { shortName, name } = value;
  const { setMenu } = useContext(MenuContext);

  function handleClick() {
    setMenu(`${type}CurrencySelect`);
  }

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      onClick={handleClick}
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
