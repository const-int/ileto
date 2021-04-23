/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

function useExchangeRate(sourceCurrencyCode, targetCurrencyCode) {
  const API_KEY = '7ebd330e8b1b21322eefef37';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrencyCode}/${targetCurrencyCode}`;

  const [exchangeRate, setExchangeRate] = useState(1);

  async function getExchangeRate() {
    const response = await fetch(API_URL);
    const json = await response.json();

    setExchangeRate(json?.conversion_rate)
  }

  useEffect(() => {
    getExchangeRate()
  }, [sourceCurrencyCode, targetCurrencyCode])

  return exchangeRate
}

export default useExchangeRate;
