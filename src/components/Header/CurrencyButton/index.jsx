import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
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

      <svg className={classes.arrow} width="11" height="7" viewBox="0 0 11 7">
        <line
          x1="1.81656"
          y1="2"
          x2="5.40234"
          y2="5.58579"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="-1"
          x2="6.07107"
          y2="-1"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 10.4023 2)"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </StyledButton>
  );
}

CurrencyButton.propTypes = {
  currencyLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrencyButton;
