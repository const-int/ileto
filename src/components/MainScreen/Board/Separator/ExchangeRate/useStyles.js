import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: [[0, 14]],
    height: 42,
    backgroundColor: theme.color.buttonBackground,
    borderRadius: 99,
    userSelect: "none"
  },
  rate: {
    fontSize: 12,
    fontWeight: 900,
    lineHeight: "16px",
    color: theme.color.primary,
  }
}));