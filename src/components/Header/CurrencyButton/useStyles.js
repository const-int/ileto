import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    padding: 0,
    border: 0,
    backgroundColor: "transparent",
    fontFamily: theme.font.mono,
    fontSize: 25,
    fontWeight: 400,
    lineHeight: "30px",
    color: "#FFF",
    outline: "none"
  },
  arrow: {
    margin: [[5, 0, 0, 3]]
  }
}));