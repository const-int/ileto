import React, { useRef } from "react";
import Header from "./Header";
import CurrencyList from "./CurrencyList";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();
  const rootRef = useRef();

  return (
    <div className={classes.root} ref={rootRef}>
      <Header />
      <CurrencyList rootEl={rootRef.current} />
    </div>
  );
}

export default CurrencySelectScreen;
