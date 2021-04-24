/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import LocalStorageUtils from "utils/LocalStorageUtils";
import DateTimeUtils from "utils/DateTimeUtils";

function useExchangeRate(sourceCurrencyCode, targetCurrencyCode) {
  const API_KEY = '7ebd330e8b1b21322eefef37';
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sourceCurrencyCode}/${targetCurrencyCode}`;
  const LOCAL_STORAGE_KEY = "exchange_rates";

  const localStorageEntries = LocalStorageUtils.get(LOCAL_STORAGE_KEY);
  const localStorageEntryKey = `${sourceCurrencyCode}_${targetCurrencyCode}`;
  const today = DateTimeUtils.getTodayString();

  const [exchangeRate, setExchangeRate] = useState(1);

  async function getExchangeRate() {
    const response = await fetch(API_URL);
    const json = await response.json();
    const rate = json?.conversion_rate;

    setExchangeRate(rate);
    LocalStorageUtils.set(LOCAL_STORAGE_KEY, {
      ...localStorageEntries,
      [localStorageEntryKey]: { rate, date: today }
    });
  }

  useEffect(() => {
    const localStorageEntry = localStorageEntries[localStorageEntryKey] || {};
    const { date, rate } = localStorageEntry;

    if (date === today) {
      return setExchangeRate(rate);
    }

    getExchangeRate()
  }, [sourceCurrencyCode, targetCurrencyCode])

  return exchangeRate
}

export default useExchangeRate;
