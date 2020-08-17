import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    minWidth: [[40], "!important"],
    padding: 0,
    color: [[theme.color.fieldForeground], "!important"],
    backgroundColor: theme.color.fieldBackground,
    borderRadius: [["50%"], "!important"],
    pointerEvents: "all",
    zIndex: 20
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