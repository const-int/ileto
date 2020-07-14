import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 42,
    height: 42,
    minWidth: 42,
    padding: 0,
    color: "#FFFFFF",
    backgroundColor: theme.color.primary,
    borderRadius: "50%",

    "&:hover": {
      backgroundColor: theme.color.primary,
    },

    "& .MuiButton-label": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%"
    }
  }
}));