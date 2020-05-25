import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import DownArrowSvg from "components/Header/CurrencyButton/img/down-arrow.svg";
import useStyles from "./useStyles";

const StyledButton = withStyles((theme) => ({
  root: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 400,
    borderRadius: 4,
    lineHeight: "30px",
    padding: [[5, 10]],
    border: 0,
    backgroundColor: "transparent",
    fontFamily: theme.font.mono,
    letterSpacing: 0,
  },
}))(MuiButton);

function CurrencyButton({ currencyLabel, onClick }) {
  const classes = useStyles();

  return (
    <StyledButton onClick={onClick}>
      <span>{currencyLabel}</span>
      <img src={DownArrowSvg} className={classes.arrow} alt="Open menu" />
    </StyledButton>
  );
}

CurrencyButton.propTypes = {
  currencyLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CurrencyButton;
