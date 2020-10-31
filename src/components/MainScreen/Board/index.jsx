import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import ValueContext from "context/ValueContext";
import CurrencyContext from "context/CurrencyContext";
import Source from "./Source";
import Target from "./Target";
import Separator from "./Separator";
import useStyles from "./useStyles";

function Board() {
  const classes = useStyles();
  const { addCommasToNumber } = StringUtils;
  const { value: sourceValue } = useContext(ValueContext);
  const { sourceCurrency, targetCurrency, exchange } = useContext(
    CurrencyContext
  );

  const convertedValue = exchange(sourceValue);
  const convertedValueInteger = Math.trunc(convertedValue);
  const shoulShowCents = convertedValueInteger < 999999999;
  const targetValue = shoulShowCents ? convertedValue : convertedValueInteger;

  return (
    <div className={classes.root}>
      <Source
        currency={sourceCurrency}
        value={addCommasToNumber(sourceValue)}
      />
      <Separator />
      <Target
        currency={targetCurrency}
        value={sourceValue ? addCommasToNumber(targetValue) : ""}
      />
    </div>
  );
}

export default Board;
