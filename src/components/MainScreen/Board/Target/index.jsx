import React from "react";
import Currency from "../Currency";
import Value from "../Value";
import useStyles from "./useStyles";

function Target({ currency, value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Currency value={currency} type="target" />
      <Value value={value} />
    </div>
  );
}

export default Target;
