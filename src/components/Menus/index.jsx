import React from "react";
import { Slide } from "@material-ui/core";
import CurrencySelectScreen from "components/CurrencySelectScreen";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function Menus({ activeMenu, onEntered, onExit }) {
  const classes = useStyles();

  const slideProps = {
    direction: "up",
    timeout: 300,
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered,
    onExit,
  };

  return (
    <div className={classes.root}>
      <Slide in={activeMenu === "currencySelect"} {...slideProps}>
        <div>
          <CurrencySelectScreen />
        </div>
      </Slide>
    </div>
  );
}

Menus.propTypes = {
  activeMenu: PropTypes.string.isRequired,
};

export default Menus;
