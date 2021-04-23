const NumberUtils = {
  formatExchangeRate(number) {
    return number < 1 ? number : number.toFixed(2);
  },
  formatResultValue(number) {
    if (number > 9999) {
      return Math.trunc(number);
    }

    const numberFixed = number.toFixed(2);
    const [wholeNumber, fractionaPart] = numberFixed.split(".");

    if (fractionaPart === "00") {
      return wholeNumber;
    }

    return numberFixed;
  },
}

export default NumberUtils;