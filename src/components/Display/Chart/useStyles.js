import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 14,
    minHeight: 175
  },
  container: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%"
  },
  valuesSection: {
    width: "calc(50% + 22px)",
  },
  descriptionSection: {
    width: "calc(50% - 22px)",
    paddingRight: 26,
    textAlign: "right",
  },
  sourceCurrencyValue: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    height: 52,
    paddingRight: 22,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: "40px",
    color: theme.color.foreground,

    "& > span": {
      position: "relative",
      top: 3
    }
  },
  targetCurrencyValue: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    height: 52,
    paddingRight: 22,
    fontSize: 51,
    lineHeight: "52px",
    fontWeight: 600,
    color: theme.color.foreground,

    "& > span": {
      position: "relative",
      top: 6
    }
  },
  currencyDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  currencyShortName: {
    fontSize: 20,
    lineHeight: "24px",
    fontWeight: 400,
    color: theme.color.foregroundLight,
    paddingLeft: 22,
  },
  currencyCode: {
    fontSize: 25,
    lineHeight: "28px",
    fontWeight: 400,
    color: theme.color.foreground,
    fontFamily: theme.font.mono
  },
  bottomSection: {
    marginTop: 18
  }
}));