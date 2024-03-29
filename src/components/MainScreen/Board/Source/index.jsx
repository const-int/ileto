import React from "react";
import Currency from "../Currency";
import Value from "../Value";
import useStyles from "./useStyles";

function Source({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Currency type="source" />
      <Value value={value} hasCursor />
    </div>
  );
}

export default Source;
