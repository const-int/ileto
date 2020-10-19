export default {
  formatCurrencyValue(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  parseNumberFromString(string) {
    return parseFloat(string.replace(/[^\d.]/g, ''));
  }
}