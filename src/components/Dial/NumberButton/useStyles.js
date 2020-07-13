import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: "76px",
    height: "76px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    fontSize: 28,
    fontWeight: 600,
    lineHeight: "76px",
    color: "#666666",
    backgroundColor: "#F4F4F4 !important",
    borderRadius: "50%",

    "& .MuiButton-label": {
      position: "relative",
      top: 2
    }
  }
}));