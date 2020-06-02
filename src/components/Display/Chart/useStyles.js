import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 20
  },
  container: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%"
  },
  valuesSection: {
    width: "50%",
    paddingRight: 8
  },
  descriptionSection: {
    width: "50%",
    paddingLeft: 8
  },
  sourceCurrencyValue: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 52,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: "40px",
    color: "#242625"
  },
  targetCurrencyValue: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 52,
    fontSize: 50,
    lineHeight: "50px",
    fontWeight: 600,
    color: "#242625",

    "& > span": {
      position: "relative",
      top: 1
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
    color: "#696F6C"
  },
  currencyCode: {
    fontSize: 25,
    lineHeight: "28px",
    fontWeight: 400,
    color: "#242625"
  },
  bottomSection: {
    marginTop: 10
  }
}));