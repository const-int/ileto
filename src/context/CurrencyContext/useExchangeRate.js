/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

function useExchangeRate(sourceCurrencyCode, targetCurrencyCode) {
  const API_URL = 'https://api.exchangeratesapi.io/latest';

  const [exchangeRate, setExchangeRate] = useState(1);

  async function getExchangeRate(source, target) {
    const response = await fetch(`${API_URL}?base=${sourceCurrencyCode}&symbols=${targetCurrencyCode}`);
    const json = await response.json();

    if (json && json.rates && json.rates[targetCurrencyCode]) {
      setExchangeRate(json.rates[targetCurrencyCode])
    }
  }

  useEffect(() => {
    getExchangeRate(sourceCurrencyCode, targetCurrencyCode)
  }, [sourceCurrencyCode, targetCurrencyCode])

  return exchangeRate
}

export default useExchangeRate;
