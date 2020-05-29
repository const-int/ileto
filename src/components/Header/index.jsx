import React from "react";
import useStyles from "components/Header/useStyles";
import ArrowsSvg from "components/Header/img/swap-arrows.svg";
import IconButton from "components/shared/IconButton";
import CurrencyButton from "./CurrencyButton";

export default function Comp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CurrencyButton currencyLabel="RUB" onClick={() => {}} />
      <div className={classes.swapButton}>
        <IconButton icon={<img src={ArrowsSvg} alt="Swap" />} />
      </div>
      <CurrencyButton currencyLabel="USD" onClick={() => {}} />
    </div>
  );
}
