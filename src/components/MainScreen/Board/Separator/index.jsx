import React, { useContext } from "react";
import CurrencyContext from "context/CurrencyContext";
import SwapButton from "./SwapButton";
import ExchangeRate from "./ExchangeRate";
import useStyles from "./useStyles";

function Separator() {
  const classes = useStyles();
  const { swap } = useContext(CurrencyContext);

  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <SwapButton onClick={swap} />
      </div>
      <div className={classes.exchangeRate}>
        <ExchangeRate />
      </div>
    </div>
  );
}

export default Separator;
