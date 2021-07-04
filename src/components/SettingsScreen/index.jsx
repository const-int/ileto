import React from "react";
import Header from "./Header";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
      minima, obcaecati odio modi odit voluptates. Eveniet laborum dolore ipsum!
      Voluptas?
    </div>
  );
}

export default CurrencySelectScreen;
