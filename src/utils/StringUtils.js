const StringUtils = {
  addCommasToNumber(number) {
    const num = number.toString();
    const re = /\B(?=(\d{3})+(?!\d))/g;

    if (num.includes(".")) {
      return num.split(".")[0].replace(re, ",") + "." + num.split(".")[1];
    } else {
      return num.replace(re, ",");
    }
  },
}

export default StringUtils;