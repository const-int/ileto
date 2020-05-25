import React from "react";
import UpdateDate from "components/Display/UpdateDate";
import useStyles from "components/Display/useStyles";

function Display() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UpdateDate updateDate="12 october 2018" updateTime="18 PM" />
    </div>
  );
}

export default Display;
