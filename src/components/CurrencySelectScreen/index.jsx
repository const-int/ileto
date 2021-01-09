import React from "react";
import Header from "./Header";
import CurrencyList from "./CurrencyList";
import BottomGradient from "./BottomGradient";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <CurrencyList />
      <BottomGradient />
    </div>
  );
}

export default CurrencySelectScreen;
