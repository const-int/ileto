import React from "react";
import useStyles from "components/Header/useStyles";
import IconButton from "components/shared/IconButton";
import CurrencyButton from "./CurrencyButton";

const Arrows = () => (
  <svg width="20" height="18" viewBox="0 0 20 18">
    <line
      x1="1"
      y1="-1"
      x2="6.37566"
      y2="-1"
      transform="matrix(-0.70192 0.712256 -0.70192 -0.712255 14.5659 7.43408)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="1"
      y1="-1"
      x2="6.37566"
      y2="-1"
      transform="matrix(-0.70192 -0.712255 -0.70192 0.712256 14.5654 18)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="12.3218"
      y1="12.6587"
      x2="18.9999"
      y2="12.6587"
      stroke-width="2"
      stroke-linecap="square"
    />
    <line
      x1="1"
      y1="-1"
      x2="6.37566"
      y2="-1"
      transform="matrix(0.70192 0.712255 0.70192 -0.712256 5.17432 -0.000488281)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="1"
      y1="-1"
      x2="6.37566"
      y2="-1"
      transform="matrix(0.70192 -0.712256 0.70192 0.712255 5.1748 10.5654)"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      x1="7.78564"
      y1="5.45166"
      x2="1.00034"
      y2="5.45166"
      stroke-width="2"
      stroke-linecap="square"
    />
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
