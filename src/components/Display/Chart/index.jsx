import React from "react";
import useStyles from "./useStyles";

const TriangleIcon = () => (
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path d="M10 0H0L5 5L10 0Z" />
  </svg>
);

function Chart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.source}>
        <div className={classes.sourceLabels}>
          <div className={classes.currencyCode}>
            <span>RUB</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>Russian Ruble</div>
        </div>

        <div className={classes.sourceValueContainer}>
          <div className={classes.sourceValue}>4,835</div>
          <div className={classes.sourceCursor} />
        </div>
      </div>

      <div className={classes.target}>
        <div className={classes.targetLabels}>
          <div className={classes.currencyCode}>
            <span>USD</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>U.S. Dollar</div>
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
