import React from "react";
import CurrencyRow from "./CurrencyRow";
import useStyles from "./useStyles";
import { currencyList } from "context/CurrencyContext/currencyList";

function CurrencyList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.label}>
        All available currencies ({currencyList.length})
      </div>
      <div>
        {currencyList.map((currency) => (
          <CurrencyRow
            code={currency.code}
            name={currency.name}
            key={currency.code}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrencyList;
