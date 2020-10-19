import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import useStyles from "./useStyles";
import ValueContext from "context/ValueContext";
import CurrencyContext from "context/CurrencyContext";

const TriangleIcon = () => (
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path d="M10 0H0L5 5L10 0Z" />
  </svg>
);

function Chart() {
  const classes = useStyles();
  const { formatCurrencyValue } = StringUtils;
  const { value } = useContext(ValueContext);
  const { sourceCurrency, targerCurrency } = useContext(CurrencyContext);

  return (
    <div className={classes.root}>
      <div className={classes.source}>
        <div className={classes.currencyLabel}>
          <div className={classes.currencyCode}>
            <span>{sourceCurrency.code}</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>{sourceCurrency.name}</div>
        </div>

        <div className={classes.sourceValueContainer}>
          <div className={classes.sourceValue}>
            {formatCurrencyValue(value)}
          </div>
          <div className={classes.sourceCursor} />
        </div>
      </div>

      <div className={classes.target}>
        <div className={classes.currencyLabel}>
          <div className={classes.currencyCode}>
            <span>{targerCurrency.code}</span>

            <TriangleIcon />
          </div>
          <div className={classes.currencyName}>{targerCurrency.name}</div>
        </div>

        <div className={classes.targetValueContainer}>
          <div className={classes.targetValue}>172</div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
