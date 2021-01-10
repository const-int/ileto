import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    height: 20,
    width: 20,
    background: "transparent",
    border: 0,
    padding: 0,
    position: "relative",

    "&::after": {
      content: "''",
      position: "absolute",
      top: -10,
      left: -10,
      bottom: -10,
      right: -10,
      opacity: isActive ? 1 : 0,
      borderRadius: "50%",
      backgroundColor: theme.color.activeBackground,
      transition: "opacity .2s ease"
    },

    "& svg": {
      position: "relative",
      width: 20,
      height: 20,
      zIndex: 2,
    },

    "& path": {
      fill: theme.color.primary
    }
  })
}));