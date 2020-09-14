import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    padding: 0,
    pointerEvents: "all",
    zIndex: 20,
    touchAction: "manipulation",

    "&:active": {
      "& $label": {
        backgroundColor: "#dad7d4"
      },
      "& $path": {
        fill: "#dad7d4"
      }
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 60,
    color: theme.color.fieldForeground,
    borderRadius: "50%",
    transition: "background .15s ease",
    backgroundColor: "transparent",
  },
  path: {
    fill: theme.color.background,
    transition: "fill .15s ease",
  }
}));