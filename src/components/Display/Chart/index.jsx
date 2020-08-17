import React from "react";
// import PropTypes from "prop-types";
import useStyles from "./useStyles";

function Chart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.source}>
        <div className={classes.sourceLabels}>
          <div className={classes.sourceCurrencyCode}>RUB</div>
          <div className={classes.sourceCurrencyName}>Russian Ruble</div>
        </div>

        <div className={classes.sourceValueContainer}>
          <div className={classes.sourceValue}>4,835</div>
          <div className={classes.sourceCursor} />
        </div>
      </div>

      <div className={classes.target}>
        <div className={classes.targetLabels}>
          <div className={classes.targetCurrencyCode}>USD</div>
          <div className={classes.targetCurrencyName}>U.S. Dollar</div>
        </div>

        <div className={classes.targetValueContainer}>
          <div className={classes.targetValue}>172</div>
        </div>
      </div>
    </div>
  );
}

// Chart.propTypes = {};

export default Chart;
