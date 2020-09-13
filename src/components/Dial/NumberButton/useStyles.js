import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    minWidth: 60,
    padding: 0,
    color: theme.color.ripple,
    borderRadius: 4,
    pointerEvents: "all",
    touchAction: "manipulation"
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: theme.color.fieldForeground,
  }
}));