import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    border: 0,
    userSelect: "none",
    borderRadius: "50%",
    outline: "none",

    "&.is-md": {
      height: 40,
      width: 40
    }
  },
}));