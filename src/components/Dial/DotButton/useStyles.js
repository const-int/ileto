import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 60,
    height: 60,
    minWidth: 60,
    padding: 0,
    color: theme.color.ripple,
    borderRadius: "50%",
    pointerEvents: "all",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: theme.color.fieldForeground,
  },
  dotContainer: {
    width: 8,
    height: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }
}));