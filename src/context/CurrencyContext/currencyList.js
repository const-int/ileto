const currencyList = [
  { code: "AUD", sign: "$", name: "Australian Dollar" },
  { code: "BGN", sign: "Лв", name: "Bulgarian Lev" },
  { code: "BRL", sign: "R$", name: "Brazilian Real" },
  { code: "CAD", sign: "CA$", name: "Canadian Dollar" },
  { code: "CHF", sign: "Fr", name: "Swiss Franc" },
  { code: "CNY", sign: "¥", name: "Yuan Renminbi" },
  { code: "CZK", sign: "Kč", name: "Czech Koruna" },
  { code: "DKK", sign: "Kr", name: "Danish Krone" },
  { code: "EUR", sign: "€", name: "European Euro" },
  { code: "GBP", sign: "£", name: "British Pound" },
  { code: "HKD", sign: "HK$", name: "Hong Kong Dollar", shortName: "H.K. Dollar"  },
  { code: "HRK", sign: "Kn", name: "Croatian Kuna" },
  { code: "HUF", sign: "Ft", name: "Hungarian Forint" },
  { code: "IDR", sign: "Rp", name: "Indonesian Rupiah" },
  { code: "ILS", sign: "₪", name: "Israeli New Sheqel", shortName: "Israeli Sheqel" },
  { code: "INR", sign: "₹", name: "Indian Rupee" },
  { code: "ISK", sign: "Íkr", name: "Icelandic Króna" },
  { code: "JPY", sign: "¥", name: "Japanese Yen" },
  { code: "KRW", sign: "₩", name: "South Korean Won", shortName: "S.K. Won" },
  { code: "MXN", sign: "MEX$", name: "Mexican Peso" },
  { code: "MYR", sign: "Rm", name: "Malaysian Ringgit" },
  { code: "NOK", sign: "Kr", name: "Norwegian Krone" },
  { code: "NZD", sign: "NZ$", name: "New Zealand Dollar", shortName: "N.Z. Dollar" },
  { code: "PHP", sign: "₱", name: "Philippine Peso" },
  { code: "PLN", sign: "Zł", name: "Polish Zloty" },
  { code: "RON", sign: "L", name: "Romanian Leu" },
  { code: "RUB", sign: "₽", name: "Russian Ruble" },
  { code: "SEK", sign: "Kr", name: "Swedish Krona" },
  { code: "SGD", sign: "S$", name: "Singapore Dollar" },
  { code: "THB", sign: "฿", name: "Thai Baht" },
  { code: "TRY", sign: "₺", name: "Turkish New Lira", shortName: "Turkish Lira" },
  { code: "USD", sign: "$", name: "United States Dollar", shortName: "U.S. Dollar" },
  { code: "ZAR", sign: "R", name: "South African Rand", shortName: "S.A. Rand"},
];

function getCurrency(code) {
  return currencyList.find(currency => currency.code === code);
}

export { currencyList, getCurrency };