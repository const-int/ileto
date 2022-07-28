import React, { useContext } from "react";
import CurrencyContext from "context/CurrencyContext";
import SectionTitle from "components/Shared/SectionTitle";
import Separator from "components/Shared/Separator";
import CurrencyRow from "./CurrencyRow";
import useStyles from "./useStyles";
import {
  currencyList,
  getCurrency,
} from "context/CurrencyContext/currencyList";

function CurrencyList({ rootEl }) {
  const classes = useStyles();
  const { favoriteCurrencyCodes } = useContext(CurrencyContext);
  const favoritesCodes = Object.keys(favoriteCurrencyCodes);

  return (
    <div className={classes.root}>
      {Boolean(favoritesCodes.length > 0) && (
        <>
          <div>
            <SectionTitle
              text={`Favorite currencies (${favoritesCodes.length})`}
            />

            <div>
              {favoritesCodes.map((favoriteCurrencyCode) => {
                const { code, name, countryCode } =
                  getCurrency(favoriteCurrencyCode);

                return (
                  <CurrencyRow
                    code={code}
                    name={name}
                    countryCode={countryCode}
                    key={code}
                    rootEl={rootEl}
                  />
                );
              })}
            </div>
          </div>

          <Separator marginTop={12} />
        </>
      )}

      <SectionTitle
        text={`All available currencies (${currencyList.length})`}
      />

      <div>
        {currencyList.map(({ code, name, countryCode }) => (
          <CurrencyRow
            code={code}
            name={name}
            countryCode={countryCode}
            key={code}
            rootEl={rootEl}
          />
        ))}
      </div>

      <div className={classes.footer} />
    </div>
  );
}

export default CurrencyList;
