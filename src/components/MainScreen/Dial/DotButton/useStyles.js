import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    padding: 0,
    background: "transparent",
    border: "none",

    "&.is-active $label": {
      backgroundColor: theme.color.activeBackground
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 60,
    paddingTop: 13,
    borderRadius: "50%",
    color: theme.color.fieldForeground,
    backgroundColor: "transparent",
    transition: "background .15s ease",
  },
  path: {
    fill: theme.color.fieldForeground
  }
}));