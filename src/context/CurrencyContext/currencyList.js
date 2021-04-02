const currencyList = [
  { code: "AUD", countryCode: "AU", sign: "$", name: "Australian Dollar" },
  { code: "BGN", countryCode: "BG", sign: "Лв", name: "Bulgarian Lev" },
  { code: "BRL", countryCode: "BR", sign: "R$", name: "Brazilian Real" },
  { code: "CAD", countryCode: "CA", sign: "CA$", name: "Canadian Dollar" },
  { code: "CHF", countryCode: "CH", sign: "Fr", name: "Swiss Franc" },
  { code: "CNY", countryCode: "CN", sign: "¥", name: "Yuan Renminbi" },
  { code: "CZK", countryCode: "CZ", sign: "Kč", name: "Czech Koruna" },
  { code: "DKK", countryCode: "DK", sign: "Kr", name: "Danish Krone" },
  { code: "EUR", countryCode: "EU", sign: "€", name: "European Euro" },
  { code: "GBP", countryCode: "GB", sign: "£", name: "British Pound" },
  { code: "HKD", countryCode: "HK", sign: "HK$", name: "Hong Kong Dollar", shortName: "H.K. Dollar"  },
  { code: "HRK", countryCode: "HR", sign: "Kn", name: "Croatian Kuna" },
  { code: "HUF", countryCode: "HU", sign: "Ft", name: "Hungarian Forint" },
  { code: "IDR", countryCode: "ID", sign: "Rp", name: "Indonesian Rupiah" },
  { code: "ILS", countryCode: "IL", sign: "₪", name: "Israeli New Sheqel", shortName: "Israeli Sheqel" },
  { code: "INR", countryCode: "IN", sign: "₹", name: "Indian Rupee" },
  { code: "ISK", countryCode: "IS", sign: "Íkr", name: "Icelandic Króna" },
  { code: "JPY", countryCode: "JP", sign: "¥", name: "Japanese Yen" },
  { code: "KRW", countryCode: "KR", sign: "₩", name: "South Korean Won", shortName: "S.K. Won" },
  { code: "MXN", countryCode: "MX", sign: "MEX$", name: "Mexican Peso" },
  { code: "MYR", countryCode: "MY", sign: "Rm", name: "Malaysian Ringgit" },
  { code: "NOK", countryCode: "NO", sign: "Kr", name: "Norwegian Krone" },
  { code: "NZD", countryCode: "NZ", sign: "NZ$", name: "New Zealand Dollar", shortName: "N.Z. Dollar" },
  { code: "PHP", countryCode: "PH", sign: "₱", name: "Philippine Peso" },
  { code: "PLN", countryCode: "PL", sign: "Zł", name: "Polish Zloty" },
  { code: "RON", countryCode: "RO", sign: "L", name: "Romanian Leu" },
  { code: "RUB", countryCode: "RU", sign: "₽", name: "Russian Ruble" },
  { code: "SEK", countryCode: "SE", sign: "Kr", name: "Swedish Krona" },
  { code: "SGD", countryCode: "SG", sign: "S$", name: "Singapore Dollar" },
  { code: "THB", countryCode: "TH", sign: "฿", name: "Thai Baht" },
  { code: "TRY", countryCode: "TR", sign: "₺", name: "Turkish New Lira", shortName: "Turkish Lira" },
  { code: "USD", countryCode: "US", sign: "$", name: "United States Dollar", shortName: "U.S. Dollar" },
  { code: "ZAR", countryCode: "ZA", sign: "R", name: "South African Rand", shortName: "S.A. Rand"},
];

function getCurrency(code) {
  return currencyList.find(currency => currency.code === code);
}

export { currencyList, getCurrency };