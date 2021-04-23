/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

function useExchangeRate(sourceCurrencyCode, targetCurrencyCode) {
  const API_KEY = '7ebd330e8b1b21322eefef37';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrencyCode}/${targetCurrencyCode}`;

  const [exchangeRate, setExchangeRate] = useState(1);

  async function getExchangeRate(sourceCurrencyCode, targetCurrencyCode) {
    const response = await fetch(API_URL);
    const json = await response.json();

    if (json && json.conversion_rate) {
      setExchangeRate(json.conversion_rate)
    }
  }

  useEffect(() => {
    getExchangeRate(sourceCurrencyCode, targetCurrencyCode)
  }, [sourceCurrencyCode, targetCurrencyCode])

  return exchangeRate
}

export default useExchangeRate;
