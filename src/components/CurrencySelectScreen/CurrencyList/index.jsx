import React, { useContext } from "react";
import CurrencyContext from "context/CurrencyContext";
import CurrencyRow from "./CurrencyRow";
import useStyles from "./useStyles";
import {
  currencyList,
  getCurrency,
} from "context/CurrencyContext/currencyList";

function CurrencyList() {
  const classes = useStyles();
  const { favoriteCurrencyCodes } = useContext(CurrencyContext);
  const favoritesCodes = Object.keys(favoriteCurrencyCodes);

  return (
    <div className={classes.root}>
      {Boolean(favoritesCodes.length > 0) && (
        <div className={classes.favorites}>
          <div className={classes.label}>
            Favorite currencies ({favoritesCodes.length})
          </div>

          <div>
            {favoritesCodes.map((code) => {
              const currency = getCurrency(code);

              return (
                <CurrencyRow
                  code={currency.code}
                  name={currency.name}
                  key={currency.code}
                />
              );
            })}
          </div>
        </div>
      )}

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
