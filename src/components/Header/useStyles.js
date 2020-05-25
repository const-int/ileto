import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 66,
    padding: [[0, 55]],
    backgroundColor: theme.color.primary,
    boxShadow: "0 2px 0 0 #D9D9D9",
  },
}));