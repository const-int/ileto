import React from "react";
// import PropTypes from "prop-types";
import useStyles from "./useStyles";

function RateDescription() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      1 <span className={classes.currencyCode}>USD</span> = 0,014{" "}
      <span className={classes.currencyCode}>RUB</span>
    </div>
  );
}

// RateDescription.propTypes = {};

export default RateDescription;
