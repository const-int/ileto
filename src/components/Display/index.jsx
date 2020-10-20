import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import ValueContext from "context/ValueContext";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "components/Display/useStyles";
import Chart from "./Chart";

function Display() {
  const classes = useStyles();
  const { formatCurrencyValue } = StringUtils;
  const { value: sourceValue } = useContext(ValueContext);
  const { sourceCurrency, targerCurrency, exchange } = useContext(
    CurrencyContext
  );

  const formattedSourceValue = formatCurrencyValue(sourceValue);
  const targetValue = exchange(sourceValue);
  const formattedTargetValue = formatCurrencyValue(targetValue);

  return (
    <div className={classes.root}>
      <Chart
        sourceCurrency={sourceCurrency}
        targerCurrency={targerCurrency}
        sourceValue={formattedSourceValue}
        targetValue={sourceValue ? formattedTargetValue : ""}
      />
    </div>
  );
}

export default Display;
