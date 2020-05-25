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
      <IconButton
        icon={<img src={ArrowsSvg} alt="Swap" />}
        style={{ margin: "0 40px" }}
      />
      <CurrencyButton currencyLabel="USD" onClick={() => {}} />
    </div>
  );
}
