import React from "react";
import useStyles from "./useStyles";

function Value({ value, hasCursor }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.value}>{value}</div>

      {hasCursor && <div className={classes.cursor} />}
    </div>
  );
}

export default Value;
