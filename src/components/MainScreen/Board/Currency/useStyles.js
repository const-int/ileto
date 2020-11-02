import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    padding: 0,
    textAlign: "left",
    border: "none",
    background: "transparent",

    "&::after": {
      content: "''",
      position: "absolute",
      top: -6,
      right: -12,
      bottom: -8,
      left: -8,
      backgroundColor: theme.color.activeBackground,
      borderRadius: 4,
      opacity: 0,
      transition: "opacity .2s ease"
    },

    "&.is-active::after": {
      opacity: 1,
    },
  },
  currencyCode: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    fontSize: 26,
    fontWeight: 400,
    lineHeight: "34px",
    zIndex: 2,

    "& > span": {
      color: theme.color.fieldForeground
    },

    "& > svg": {
      marginLeft: 10,
      marginTop: -2,

      "& > path": {
        stroke: theme.color.primary
      }
    }
  },
  currencyName: {
    position: "relative",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14px",
    color: "#929199",
    zIndex: 2,
    whiteSpace: "nowrap"
  },
}));