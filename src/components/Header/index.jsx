import React from "react";
import useStyles from "components/Header/useStyles";
import IconButton from "components/shared/IconButton";
import CurrencyButton from "./CurrencyButton";

const Arrows = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.06299 1.63672L9.88071 5.45561L6.06513 9.27665" />
    <path d="M1.00015 5.45788L9.90567 5.45538" />
    <path d="M13.9118 18.3636L10.0934 14.5454L13.9097 10.7251" />
    <path d="M10.0931 14.5454L19.0003 14.5429" />
  </svg>
);

export default function Comp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CurrencyButton currencyLabel="RUB" onClick={() => {}} />
      <div className={classes.swapButton}>
        <IconButton icon={<Arrows />} />
      </div>
      <CurrencyButton currencyLabel="USD" onClick={() => {}} />
    </div>
  );
}
