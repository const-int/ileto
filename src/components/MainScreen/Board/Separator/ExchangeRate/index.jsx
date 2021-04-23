import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import NumberUtils from "utils/NumberUtils";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "./useStyles";

function ExchangeRate() {
  const classes = useStyles();
  const { addCommasToNumber } = StringUtils;
  const { formatExchangeRate } = NumberUtils;
  const { sourceCurrency, targetCurrency, exchangeRate } = useContext(
    CurrencyContext
  );

  return (
    <div className={classes.root}>
      <span className={classes.rate}>
        1 {sourceCurrency.code} ={" "}
        {addCommasToNumber(formatExchangeRate(exchangeRate))}{" "}
        {targetCurrency.code}
      </span>
    </div>
  );
}

export default ExchangeRate;
