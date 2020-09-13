import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    padding: 0,
    color: [[theme.color.background], "!important"],
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