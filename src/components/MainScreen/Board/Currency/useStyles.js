import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: 0,
    textAlign: "left",
    border: "none",
    background: "transparent",

    "&::after": {
      content: "''",
      position: "absolute",
      top: -6,
      right: -8,
      bottom: -7,
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
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "14px",
    color: theme.color.foregroundSecondary,
    zIndex: 2,
    whiteSpace: "nowrap",
    paddingLeft: 34
  },
  flag: {
    position: "relative",
    width: 24,
    height: 18,
    borderRadius: 2,
    marginRight: 9,
    boxShadow: `0 0 0 1px ${theme.color.flagBorder}`,
    zIndex: 2
  },
  flag2: {
    position: "absolute",
    width: 24,
    height: 18,
    borderRadius: 2,
    marginRight: 9,
    boxShadow: `0 0 0 1px ${theme.color.flagBorder}`,
    zIndex: 2
  }
}));