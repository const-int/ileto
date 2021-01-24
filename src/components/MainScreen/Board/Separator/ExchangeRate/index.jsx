import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "./useStyles";

function ExchangeRate() {
  const classes = useStyles();
  const { addCommasToNumber } = StringUtils;
  const { sourceCurrency, targetCurrency, getApproximateRate } = useContext(
    CurrencyContext
  );

  return (
    <div className={classes.root}>
      <span className={classes.rate}>
        1 {sourceCurrency.code} = {addCommasToNumber(getApproximateRate())}{" "}
        {targetCurrency.code}
      </span>
    </div>
  );
}

export default ExchangeRate;
