import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "76px",
    height: "76px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    fontSize: 25,
    fontWeight: 600,
    lineHeight: "76px",
    color: "#FFF",
    borderRadius: "50%",
    backgroundColor: theme.color.primary,

    "& .MuiButton-label": {
      position: "relative",
      top: 2
    }
  }
}));