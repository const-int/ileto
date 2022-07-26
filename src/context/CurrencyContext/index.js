import React, { useState, createContext } from "react";
import LocalStorageUtils from "utils/LocalStorageUtils";
import useExchangeRate from "./useExchangeRate";
import { getCurrency } from "./currencyList";

const CurrencyContext = createContext({ value: "" });

function CurrencyContextProvider({ children }) {
  const LOCAL_STORAGE_KEY = "favorite_currencies";

  const [sourceCurrency, setSourceCurrency] = useState(getCurrency("USD"));
  const [targetCurrency, setTargetCurrency] = useState(getCurrency("EUR"));
  const [favoriteCurrencyCodes, setFavoriteCurrencyCodes] = useState(LocalStorageUtils.get(LOCAL_STORAGE_KEY));
  const exchangeRate = useExchangeRate(sourceCurrency.code, targetCurrency.code);

  function swap() {
    const nextTarget = sourceCurrency;

    setSourceCurrency(targetCurrency);
    setTargetCurrency(nextTarget);
  }

  function addFavoriteCurrencyCode(code) {
    if (favoriteCurrencyCodes[code]) return;

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes, [code]: true};

    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    LocalStorageUtils.set(LOCAL_STORAGE_KEY, updatedFavoriteCurrencyCodes);
  }

  function removeFavoriteCurrencyCode(code) {
    if (!favoriteCurrencyCodes[code]) return;

    const updatedFavoriteCurrencyCodes = {...favoriteCurrencyCodes };
    delete updatedFavoriteCurrencyCodes[code]

    setFavoriteCurrencyCodes(updatedFavoriteCurrencyCodes)
    LocalStorageUtils.set(LOCAL_STORAGE_KEY, updatedFavoriteCurrencyCodes);
  }

  return (
    <CurrencyContext.Provider
      value={{
        targetCurrency,
        sourceCurrency,
        exchangeRate,
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