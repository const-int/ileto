import React, { useState, useContext } from "react";
import MenuContext from "context/MenuContext";
import CurrencyContext from "context/CurrencyContext";
import { getCurrency } from "context/CurrencyContext/currencyList";
import useStyles from "./useStyles";

function CurrencySelectButton({ code, name }) {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });
  const { setMenu, menu } = useContext(MenuContext);
  const { setSourceCurrency, setTargetCurrency } = useContext(CurrencyContext);

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
    }, 300);
  }

  return (
    <button type="button" className={classes.root} onClick={handleClick}>
      <div className={classes.code}>{code}</div>
      <div className={classes.name}>{name}</div>
    </button>
  );
}

export default CurrencySelectButton;
