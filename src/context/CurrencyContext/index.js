import React, { useState, createContext } from "react";
import useExchangeRate from "./useExchangeRate";
import { getCurrency } from "./currencyList";

const CurrencyContext = createContext({ value: "" });

function CurrencyContextProvider({ children }) {
  const [sourceCurrency, setSourceCurrency] = useState(getCurrency("RUB"));
  const [targetCurrency, setTargetCurrency] = useState(getCurrency("USD"));
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
    const re1 = new RegExp(`\\d*\\.?0*\\d{0,3}`);
    const re2 = new RegExp(`\\d*\\.0*\\d{2}`);

    return (exchangeRate).toFixed(10).match(exchangeRate < 1 ? re1 : re2)[0]
  }

  return (
    <CurrencyContext.Provider
      value={{ targetCurrency, sourceCurrency, exchangeRate, exchange, getApproximateRate, swap }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider };

export default CurrencyContext;