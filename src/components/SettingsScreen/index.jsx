import React from "react";
import SectionTitle from "components/Shared/SectionTitle";
import Separator from "components/Shared/Separator";
import Header from "./Header";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <SectionTitle text="Appearance" />
      <Separator marginTop={12} />
      <SectionTitle text="About" />
    </div>
  );
}

export default CurrencySelectScreen;
