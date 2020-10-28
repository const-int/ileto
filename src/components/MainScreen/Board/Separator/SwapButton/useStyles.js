import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    width: 40,
    height: 40,
    minWidth: [[40], "!important"],
    padding: 0,
    color: [[theme.color.fieldForeground], "!important"],
    backgroundColor: theme.color.background,
    border: "2px solid #F2F5F6",
    borderRadius: [["50%"], "!important"],
    pointerEvents: "all",
    touchAction: "manipulation",
    transition: "background .15s ease, border .15s ease",
    zIndex: 20,

    "&:hover": {
      backgroundColor: theme.color.background,
    },

    "&:active": {
      backgroundColor: "#FEE4D5",
      borderColor: "#FEE4D5",
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
  label: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",

    "& path": {
      fill: theme.color.primary,
    }
  }
}));