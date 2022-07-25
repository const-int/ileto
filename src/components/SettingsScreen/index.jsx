import React from "react";
import SectionTitle from "components/Shared/SectionTitle";
import Separator from "components/Shared/Separator";
import Header from "./Header";
import AppearanceOptions from "./AppearanceOptions";
import AboutContent from "./AboutContent";
import SocialLinks from "./SocialLinks";
import useStyles from "./useStyles";

function CurrencySelectScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <SectionTitle text="Appearance" />
      <AppearanceOptions />
      <Separator marginTop={12} />
      <SectionTitle text="About" />
      <AboutContent />
      <SocialLinks />
    </div>
  );
}

export default CurrencySelectScreen;
