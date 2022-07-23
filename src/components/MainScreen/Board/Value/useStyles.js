import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  value: {
    color: theme.color.fieldForeground,
    fontSize: 26,
    lineHeight: "34px",
    fontWeight: 700,
    paddingLeft: 6,
    wordBreak: "break-word",
    textAlign: "right",

    "& span": {
      position: "relative",
      top: -6,
      display: "inline-block",
      verticalAlign: "top",
      fontSize: 16,
    }
  },
  cursor: {
    position: "absolute",
    top: -2,
    right: -3,
    width: 2,
    height: 34,
    backgroundColor: theme.color.fieldForeground,
    animation: "1s cursorBlink step-end infinite"
  }
}));