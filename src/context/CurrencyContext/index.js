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

  function updateLocalStorage(value) {
    localStorage.setItem(LOCALSTORAGE_FAVORITES_KEY, JSON.stringify(value))
  }

  function addFavoriteCurrencyCode(code) {
    if (favoriteCurrencyCodes[code]) return;

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes, [code]: true};

    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    updateLocalStorage(updatedFavoriteCurrencyCodes)
  }

  function removeFavoriteCurrencyCode(code) {
    if (!favoriteCurrencyCodes[code]) return;

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes };
    delete updatedFavoriteCurrencyCodes[code]

    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    updateLocalStorage(updatedFavoriteCurrencyCodes)
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