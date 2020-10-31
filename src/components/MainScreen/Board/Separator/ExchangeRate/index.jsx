import React, { useContext } from "react";
import StringUtils from "utils/StringUtils";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "./useStyles";

function ExchangeRate() {
  const classes = useStyles();
  const { addCommasToNumber } = StringUtils;
  const { sourceCurrency, targetCurrency, getApproximateRate } = useContext(
    CurrencyContext
  );

  return (
    <div className={classes.root}>
      <svg
        className={classes.icon}
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
      >
        <path d="M1.27445 6.73396C0.851377 7.08897 0.7962 7.71973 1.15121 8.1428C1.50621 8.56587 2.13697 8.62104 2.56004 8.26604L1.27445 6.73396ZM4.89655 5L5.6061 4.29534L4.95815 3.64289L4.25376 4.23396L4.89655 5ZM7.37931 7.5L6.66976 8.20466L7.37931 8.91913L8.08886 8.20466L7.37931 7.5ZM13.5509 2.70466C13.9401 2.31278 13.9379 1.67962 13.546 1.29045C13.1542 0.90128 12.521 0.903471 12.1318 1.29534L13.5509 2.70466ZM8.86897 0C8.31668 0 7.86897 0.447715 7.86897 1C7.86897 1.55228 8.31668 2 8.86897 2V0ZM13.8345 1H14.8345V0H13.8345V1ZM12.8345 6C12.8345 6.55228 13.2822 7 13.8345 7C14.3868 7 14.8345 6.55228 14.8345 6H12.8345ZM2.56004 8.26604L5.53935 5.76604L4.25376 4.23396L1.27445 6.73396L2.56004 8.26604ZM4.187 5.70466L6.66976 8.20466L8.08886 6.79534L5.6061 4.29534L4.187 5.70466ZM8.08886 8.20466L13.5509 2.70466L12.1318 1.29534L6.66976 6.79534L8.08886 8.20466ZM8.86897 2H13.8345V0H8.86897V2ZM12.8345 1V6H14.8345V1H12.8345Z" />
      </svg>

      <span className={classes.rate}>
        {sourceCurrency.sign} 1 ≈ {targetCurrency.sign}{" "}
        {addCommasToNumber(getApproximateRate())}
      </span>
    </div>
  );
}

export default ExchangeRate;
