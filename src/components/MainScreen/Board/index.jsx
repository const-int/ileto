import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import NumberUtils from "utils/NumberUtils";
import ValueContext from "context/ValueContext";
import CurrencyContext from "context/CurrencyContext";
import Source from "./Source";
import Target from "./Target";
import Separator from "./Separator";
import useStyles from "./useStyles";

function Board() {
  const classes = useStyles();
  const { addCommasToNumber } = StringUtils;
  const { formatResultValue } = NumberUtils;
  const { value: sourceValue } = useContext(ValueContext);
  const { targetCurrency, exchangeRate } = useContext(CurrencyContext);

  const resultValue = sourceValue * exchangeRate;

  return (
    <div className={classes.root}>
      <Source value={addCommasToNumber(sourceValue)} />
      <Separator />
      <Target
        currency={targetCurrency}
        value={
          sourceValue ? addCommasToNumber(formatResultValue(resultValue)) : ""
        }
      />
    </div>
  );
}

export default Board;
