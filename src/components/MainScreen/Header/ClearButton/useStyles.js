import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    padding: [[1, 11, 0, 9]],
    fontSize: 12,
    lineHeight: "15px",
    fontWeight: 700,
    border: "1px solid",
    color: theme.color.primary,
    borderColor: theme.color.primary,
    backgroundColor: theme.color.background,
    borderRadius: 99,
  }
}));