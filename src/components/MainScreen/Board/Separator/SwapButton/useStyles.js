import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 42,
    height: 42,
    flexShrink: 0,
    padding: 0,
    color: [[theme.color.fieldForeground], "!important"],
    backgroundColor: theme.color.buttonBackground,
    borderRadius: [["50%"], "!important"],
    touchAction: "manipulation",
    transition: "background .15s ease",
    border: "none",
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& path": {
      fill: theme.color.primary,
    },

    "&.is-active": {
      backgroundColor: theme.color.activeBackground,
      borderColor: theme.color.activeBackground,
    },

    "&::after": {
      content: "''",
      position: "absolute",
      top: -10,
      left: -10,
      right: -10,
      bottom: -10,
    },
  },
}));