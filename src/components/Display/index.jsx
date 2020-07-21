import React from "react";
import useStyles from "components/Display/useStyles";
import Chart from "./Chart";

function Display() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chart />
    </div>
  );
}

export default Display;
