import React, { useState, createContext, useEffect } from "react";

const CurrencyContext = createContext({ value: "" });

const USD = {
  code: "USD",
  name: "U.S. Dollar",
};
const RUB = {
  code: "RUB",
  name: "Russian Ruble",
};

function CurrencyContextProvider({ children }) {
  const API_URL = 'https://api.exchangeratesapi.io/latest';

  const [sourceCurrency, setSourceCurrency] = useState(USD);
  const [targerCurrency, setTargerCurrency] = useState(RUB);
  const [exchangeRate, setExchangeRate] = useState(1);

  function exchange(value) {
    const result = value * exchangeRate;

    return `${result.toFixed(result > 999 ? 0 : 2)}`;
  }

  async function getExchangeRate(source, target) {
    fetch(`${API_URL}?base=${source.code}&symbols=${target.code}`)
    .then(response => response.json())
    .then(data => {
      if (data && data.rates && data.rates[target.code]) {
        setExchangeRate(data.rates[target.code])
      }
    });
  }

  useEffect(() => {
    getExchangeRate(sourceCurrency, targerCurrency)
  }, [sourceCurrency, targerCurrency])

  return (
    <CurrencyContext.Provider
      value={{ targerCurrency, sourceCurrency, exchange }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider };

export default CurrencyContext;