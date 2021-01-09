import React, { useContext } from "react";
import { Slide } from "@material-ui/core";
import CurrencySelectScreen from "components/CurrencySelectScreen";
import MenuContext from "context/MenuContext";
import useStyles from "./useStyles";

function Menu() {
  const classes = useStyles();
  const { menu, setIsMenuOpen } = useContext(MenuContext);

  const slideProps = {
    direction: "left",
    timeout: 300,
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered: () => setIsMenuOpen(true),
    onExit: () => setIsMenuOpen(false),
  };

  return (
    <div className={classes.root}>
      <Slide in={menu === "currencySelect"} {...slideProps}>
        <div>
          <CurrencySelectScreen />
        </div>
      </Slide>
    </div>
  );
}

export default Menu;
