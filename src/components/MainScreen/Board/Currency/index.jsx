import React from "react";
import ChevronIcon from "./ChevronIcon";
import useStyles from "./useStyles";

function Currency({ value }) {
  const classes = useStyles();
  const { shortName, name } = value;

  return (
    <button className={classes.root}>
      <div className={classes.currencyCode}>
        <span>{value.code}</span>

        <ChevronIcon />
      </div>
      <div className={classes.currencyName}>{shortName || name}</div>
    </button>
  );
}

export default Currency;
