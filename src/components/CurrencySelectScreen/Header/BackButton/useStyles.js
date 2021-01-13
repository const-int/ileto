import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    position: "relative",
    backgroundColor: isActive ? theme.color.activeBackground2 : theme.color.primary,
    zIndex: 2,
    height: 30,
    width: 30,

    "&::before": {
      content: "''",
      position: "absolute",
      top: -10,
      left: -10,
      right: -10,
      bottom: -10
    }
  })
}));