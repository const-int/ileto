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
            {favoritesCodes.map((favoriteCurrencyCode) => {
              const { code, name, countryCode } = getCurrency(
                favoriteCurrencyCode
              );

              return (
                <CurrencyRow
                  code={code}
                  name={name}
                  countryCode={countryCode}
                  key={code}
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
        {currencyList.map(({ code, name, countryCode }) => (
          <CurrencyRow
            code={code}
            name={name}
            countryCode={countryCode}
            key={code}
          />
        ))}
      </div>
    </div>
  );
}

export default CurrencyList;
