import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    position: "relative",
    backgroundColor: isActive ? theme.color.activeBackground : theme.color.menuHeaderBackground,
    zIndex: 2,
    height: 40,
    width: 40,
    padding: 12,
    transition: "none",

    "& path": {
      fill: theme.color.primary
    },

    "&::before": {
      content: "''",
      position: "absolute",
      top: -10,
      left: -10,
      right: -10,
      bottom: -10
    }
  }),
  cross: {
    width: 24,
    height: 24,
    display: "block"
  }
}));