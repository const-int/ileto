import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    padding: 0,
    color: theme.color.ripple,
    borderRadius: 4,
    pointerEvents: "all",
    touchAction: "manipulation",

    "&:active $label": {
      backgroundColor: "#dad7d4"
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    color: theme.color.fieldForeground,
    borderRadius: "50%",
    transition: "background .15s ease",
    backgroundColor: "transparent",
  }
}));