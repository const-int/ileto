const StringUtils = {
  addCommasToNumber(number) {
    const num = number.toString();
    const re = /\B(?=(\d{3})+(?!\d))/g;
    let result;

    if (num.includes(".")) {
      result = num.split(".")[0].replace(re, ",") + "." + num.split(".")[1];
    } else {
      result = num.replace(re, ",");
    }

    return result;
  },
}

export default StringUtils;