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
      backgroundColor: theme.color.activeBackground,
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  path: {
    fill: theme.color.background,
    transition: "fill .15s ease",
  },
  circle: {
    height: 40,
    width: 40,
    transition: "fill .15s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));