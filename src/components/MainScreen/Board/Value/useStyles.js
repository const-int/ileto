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
    paddingLeft: 20,
    wordBreak: "break-word",
    textAlign: "right"
  },
  cursor: {
    position: "absolute",
    top: -2,
    right: -3,
    width: 2,
    height: 34,
    backgroundColor: theme.color.primary,
    animation: "1s cursorBlink step-end infinite"
  }
}));