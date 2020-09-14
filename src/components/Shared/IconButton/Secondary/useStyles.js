import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 40,
    height: 40,
    minWidth: [[40], "!important"],
    padding: 0,
    color: [[theme.color.fieldForeground], "!important"],
    backgroundColor: theme.color.fieldBackground,
    borderRadius: [["50%"], "!important"],
    pointerEvents: "all",
    touchAction: "manipulation",
    transition: "background .15s ease",
    zIndex: 20,

    "&:active": {
      backgroundColor: "#dad7d4",

      "&::after": {
        opacity: 1,
      }
    },

    "&::after": {
      opacity: 0,
      content: "''",
      position: "absolute",
      top: -10,
      left: -10,
      right: -10,
      bottom: -10,
      backgroundColor: "#dad7d4",
      borderRadius: "50%",
      transition: "opacity .15s ease",
    }
  },
  label: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: theme.color.fieldForeground,
  }
}));