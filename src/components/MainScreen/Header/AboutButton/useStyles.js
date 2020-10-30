import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    padding: [[0, 10]],
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 700,
    border: "1px solid",
    color: theme.color.primary,
    borderColor: theme.color.primary,
    backgroundColor: theme.color.background,
    borderRadius: 99,
    transition: "background .15s ease, border .15s ease",

    "&:active": {
      backgroundColor: "#FEE4D5",
      borderColor: "#FEE4D5",
    },
  }
}));