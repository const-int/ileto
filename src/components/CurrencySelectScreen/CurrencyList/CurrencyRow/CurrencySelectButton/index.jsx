import React, { useState, useContext } from "react";
import MenuContext from "context/MenuContext";
import CurrencyContext from "context/CurrencyContext";
import { getCurrency } from "context/CurrencyContext/currencyList";
import Router from "services/Router";
import useStyles from "./useStyles";

function CurrencySelectButton({ code, name, countryCode }) {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });
  const { setMenu, menu } = useContext(MenuContext);
  const { setSourceCurrency, setTargetCurrency } = useContext(CurrencyContext);
  const srcRoot = Router.getRoute("flags");

  function handleClick() {
    if (isActive) {
      return;
    }

    setIsActive(true);

    if (menu === "sourceCurrencySelect") {
      setSourceCurrency(getCurrency(code));
    } else {
      setTargetCurrency(getCurrency(code));
    }

    setTimeout(() => {
      setMenu(null);
      setIsActive(false);
    }, 150);
  }

  return (
    <button type="button" className={classes.root} onClick={handleClick}>
      <div className={classes.flag}>
        <img
          src={`${srcRoot}/${countryCode.toLowerCase()}.svg`}
          alt={`${countryCode} flag`}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.code}>{code}</div>
        <div className={classes.name}>{name}</div>
      </div>
    </button>
  );
}

export default CurrencySelectButton;
