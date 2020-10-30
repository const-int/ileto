import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 60,
    padding: 0,
    borderRadius: 4,
    touchAction: "manipulation",

    "&:active $label": {
      backgroundColor: "#FEE4D5"
    }
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    color: theme.color.fieldForeground,
    borderRadius: "50%",
    transition: "background .15s ease",
    backgroundColor: "transparent",
  }
}));