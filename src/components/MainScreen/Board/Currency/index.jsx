import React from "react";
import ChevronIcon from "./ChevronIcon";
import useStyles from "./useStyles";

function Currency({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.currencyLabel}>
      <div className={classes.currencyCode}>
        <span>{value.code}</span>

        <ChevronIcon />
      </div>
      <div className={classes.currencyName}>
        {value.shortName || value.name}
      </div>
    </div>
  );
}

export default Currency;
