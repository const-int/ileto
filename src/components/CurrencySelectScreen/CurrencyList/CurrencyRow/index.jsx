import React from "react";
import useStyles from "./useStyles";

function CurrencyRow({ code, name, isFavorite }) {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
      <div className={classes.code}>{code}</div>
      <div className={classes.name}>{name}</div>
    </button>
  );
}

export default CurrencyRow;
