import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: [[0, 15]],
    height: 40,
    border: "2px solid #F2F5F6",
    backgroundColor: theme.color.background,
    borderRadius: 99,
    userSelect: "none"
  },
  rate: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "14px",
    color: theme.color.primary,
  }
}));