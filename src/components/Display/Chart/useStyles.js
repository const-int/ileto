import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 270,
    userSelect: "none"
  },
  source: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "100%"
  },
  currencyCode: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "30px",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",

    "&::after": {
      content: "''",
      position: "absolute",
      top: -4,
      right: -8,
      bottom: 0,
      left: -8,
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      borderRadius: 4,
      opacity: 0,
      transition: "opacity .2s ease"
    },

    "&:active::after": {
      opacity: 1,
    },

    "& > span": {
      color: theme.color.primary
    },

    "& > svg": {
      margin: [[2, 0, 0, 4]],

      "& > path": {
        fill: theme.color.primary
      }
    }
  },
  currencyName: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
    color: theme.color.foregroundLight
  },
  target: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "100%",
    marginTop: 35
  },
  sourceValueContainer: {
    display: "flex",
    height: 44,
    width: "50%",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: theme.color.primary,
    color: theme.color.foreground,
    fontSize: 28,
    fontWeight: 600,
    lineHeight: "42px",
  },
  targetValueContainer: {
    height: 44,
    width: "50%",
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: theme.color.foregroundLight,
    color: theme.color.foreground,
    fontSize: 28,
    fontWeight: 600,
    lineHeight: "42px",
  },
  sourceCursor: {
    width: 1,
    height: 34,
    backgroundColor: theme.color.primary,
    marginLeft: 3,
    animation: "1s cursorBlink step-end infinite"
  }
}));