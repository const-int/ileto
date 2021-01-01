import React from "react";
import Header from "./Header";
import CurrencyList from "./CurrencyList";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <CurrencyList />
    </div>
  );
}

export default CurrencySelectScreen;
