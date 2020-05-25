import React from "react";
import PropTypes from "prop-types";
import DownArrowSvg from "components/Header/CurrencyButton/img/down-arrow.svg";
import useStyles from "./useStyles";

function CurrencyButton({ currencyLabel, onClick }) {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root} onClick={onClick}>
      <span>{currencyLabel}</span>
      <img src={DownArrowSvg} className={classes.arrow} alt="Open menu" />
    </button>
  );
}

CurrencyButton.propTypes = {
  currencyLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrencyButton;
