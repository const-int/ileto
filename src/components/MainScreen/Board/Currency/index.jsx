import React, { useContext } from "react";
import CurrencyContext from "context/CurrencyContext";
import MenuContext from "context/MenuContext";
import ChevronIcon from "./ChevronIcon";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import Router from "services/Router";
import useStyles from "./useStyles";

function Currency({ type }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(() => {});
  const { sourceCurrency, targetCurrency } = useContext(CurrencyContext);
  const currencies = [sourceCurrency, targetCurrency].sort(function (a, b) {
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  const { setMenu } = useContext(MenuContext);

  function handleClick() {
    setMenu(`${type}CurrencySelect`);
  }

  function shouldBeHidden(currency, index) {
    if (sourceCurrency.code === targetCurrency.code) {
      return index > 0;
    }

    if (type === "target") {
      return currency.code === sourceCurrency.code;
    }

    if (type === "source") {
      return currency.code === targetCurrency.code;
    }
  }

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      onClick={handleClick}
      {...tapEventProps}
    >
      {currencies.map((currency, index) => (
        <div hidden={shouldBeHidden(currency, index)} key={index}>
          <div className={classes.currencyCode}>
            <>
              <img
                src={Router.getRoute(
                  "flags",
                  `${currency.countryCode?.toLowerCase()}.svg`
                )}
                className={classes.flag}
                alt={`${currency.code} flag`}
              />
            </>
            <span>{currency.code}</span>

            <ChevronIcon />
          </div>
          <div className={classes.currencyName}>
            {currency.shortName || currency.name}
          </div>
        </div>
      ))}
    </button>
  );
}

export default Currency;
