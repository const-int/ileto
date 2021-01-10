import React from "react";
import useStyles from "./useStyles";

function Value({ value, hasCursor }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.value}
        dangerouslySetInnerHTML={{ __html: value }}
      />

      {hasCursor && <div className={classes.cursor} />}
    </div>
  );
}

export default Value;
