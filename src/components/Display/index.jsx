import React from "react";
import UpdateDate from "components/Display/UpdateDate";
import useStyles from "components/Display/useStyles";
import RateDescription from "components/Display/RateDescription";
import Chart from "./Chart";

function Display() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <UpdateDate updateDate="12 october 2018" updateTime="18 PM" />
      <RateDescription /> */}
      <Chart />
    </div>
  );
}

export default Display;
