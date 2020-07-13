import React from "react";
import classnames from "classnames";
// import PropTypes from "prop-types";
import useStyles from "./useStyles";

function Chart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.descriptionSection}>
          <div className={classes.currencyDescription}>
            <div className={classes.currencyShortName}>dollar</div>
            <div className={classes.currencyCode}>USD</div>
          </div>

          <div
            className={classnames(
              classes.currencyDescription,
              classes.bottomSection
            )}
          >
            <div className={classes.currencyShortName}>ruble</div>
            <div className={classes.currencyCode}>RUB</div>
          </div>
        </div>

        <div className={classes.valuesSection}>
          <div className={classes.sourceCurrencyValue}>
            <span>13</span>
          </div>
          <div
            className={classnames(
              classes.targetCurrencyValue,
              classes.bottomSection
            )}
          >
            <span>230</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart.propTypes = {};

export default Chart;
