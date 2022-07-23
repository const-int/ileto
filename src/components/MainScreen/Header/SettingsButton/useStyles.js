import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    padding: [[4, 11]],
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 700,
    border: "none",
    color: theme.color.primary,
    backgroundColor: theme.color.buttonBackground,
    borderRadius: 99,
    transition: "background .15s ease",

    "&.is-active": {
      backgroundColor: theme.color.activeBackground,
    },
  }
}));