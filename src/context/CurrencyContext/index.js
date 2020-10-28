import React, { useState, createContext } from "react";
import useExchangeRate from "./useExchangeRate";
import { getCurrency } from "./currencyList";

const CurrencyContext = createContext({ value: "" });

function CurrencyContextProvider({ children }) {
  const [sourceCurrency, setSourceCurrency] = useState(getCurrency("USD"));
  const [targetCurrency, setTargetCurrency] = useState(getCurrency("RUB"));
  const exchangeRate = useExchangeRate(sourceCurrency.code, targetCurrency.code);

  function swap() {
    const nextTarget = sourceCurrency;

    setSourceCurrency(targetCurrency);
    setTargetCurrency(nextTarget);
  }

  return (
    <CurrencyContext.Provider
      value={{ targetCurrency, sourceCurrency, exchangeRate, swap }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider };

export default CurrencyContext;