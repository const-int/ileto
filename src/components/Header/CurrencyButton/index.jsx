import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import DownArrowSvg from "components/Header/CurrencyButton/img/down-arrow.svg";
import useStyles from "./useStyles";

const StyledButton = withStyles((theme) => ({
  root: {
    padding: [[5, 10]],
    letterSpacing: 0,
    fontFamily: theme.font.mono,
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "30px",
    borderRadius: 8,
    border: 0,
    color: theme.color.ripple,
    backgroundColor: "transparent",
  },
}))(MuiButton);

function CurrencyButton({ currencyLabel, onClick }) {
  const classes = useStyles();

  return (
    <StyledButton onClick={onClick}>
      <span className={classes.currency}>{currencyLabel}</span>
      <img src={DownArrowSvg} className={classes.arrow} alt="Open menu" />
    </StyledButton>
  );
}

CurrencyButton.propTypes = {
  currencyLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrencyButton;
