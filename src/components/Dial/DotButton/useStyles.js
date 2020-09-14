import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    minWidth: 60,
    padding: 0,
    color: theme.color.ripple,
    borderRadius: 4,
    pointerEvents: "all",
    touchAction: "manipulation",

    "&:active $label": {
      backgroundColor: "#dad7d4"
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    transition: "background .15s ease",
    backgroundColor: "transparent",
    borderRadius: "50%"
  },
  dotContainer: {
    width: 5,
    height: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }
}));