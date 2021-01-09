import React, { useState, createContext } from "react";
import useExchangeRate from "./useExchangeRate";
import { getCurrency } from "./currencyList";

const CurrencyContext = createContext({ value: "" });

function CurrencyContextProvider({ children }) {
  const LOCALSTORAGE_FAVORITES_KEY = "ileto::favorite_currencries";

  const [sourceCurrency, setSourceCurrency] = useState(getCurrency("RUB"));
  const [targetCurrency, setTargetCurrency] = useState(getCurrency("GBP"));
  const [favoriteCurrencyCodes, setFavoriteCurrencyCodes] = useState(JSON.parse(localStorage.getItem(LOCALSTORAGE_FAVORITES_KEY)) || {});
  const exchangeRate = useExchangeRate(sourceCurrency.code, targetCurrency.code);

  function swap() {
    const nextTarget = sourceCurrency;

    setSourceCurrency(targetCurrency);
    setTargetCurrency(nextTarget);
  }

  function exchange(value) {
    const result = (value * exchangeRate).toString();

    return result.slice(0, result.indexOf(".") + 3);
  }

  function getApproximateRate() {
    const re1 = new RegExp(`\\d*\\.?0*[1-9]{0,3}`);
    const re2 = new RegExp(`\\d*\\.\\d{2}`);

    return (exchangeRate).toFixed(10).match(exchangeRate < 1 ? re1 : re2)[0]
  }

  function addFavoriteCurrencyCode(code) {
    if (favoriteCurrencyCodes[code]) {
      return;
    }

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes, [code]: true};

    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    localStorage.setItem(LOCALSTORAGE_FAVORITES_KEY, JSON.stringify(updatedFavoriteCurrencyCodes))
  }

  function removeFavoriteCurrencyCode(code) {
    if (!favoriteCurrencyCodes[code]) {
      return;
    }

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes, [code]: undefined};
    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    localStorage.setItem(LOCALSTORAGE_FAVORITES_KEY, JSON.stringify(updatedFavoriteCurrencyCodes))
  }

  return (
    <CurrencyContext.Provider
      value={{
        targetCurrency,
        sourceCurrency,
        exchangeRate,
        exchange,
        getApproximateRate,
        swap,
        setSourceCurrency,
        setTargetCurrency,
        favoriteCurrencyCodes,
        addFavoriteCurrencyCode,
        removeFavoriteCurrencyCode
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider };

export default CurrencyContext;