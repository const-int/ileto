import React from "react";
import Header from "./Header";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
}

export default CurrencySelectScreen;
