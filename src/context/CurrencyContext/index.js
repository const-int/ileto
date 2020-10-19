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
  const [sourceCurrency, setSourceCurrency] = useState({code: "RUB"});
  const [targerCurrency, setTargerCurrency] = useState({code: "USD"});

  useEffect(() => {
    setSourceCurrency(USD);
    setTargerCurrency(RUB);
  }, [])

  return (
    <CurrencyContext.Provider
      value={{ targerCurrency, sourceCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export { CurrencyContextProvider };

export default CurrencyContext;