import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#FFF",
    paddingBottom: "60%",

    "&::before": {
      content: "''",
      position: "absolute",
      top: -1,
      left: -1,
      width: "calc(100% + 1px)",
      height: "calc(100% + 1px)",
      backgroundColor: theme.color.primary,
    }
  },
  button: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    lineHeight: "30px",
    color: "#FFF",
    borderRadius: 0,
  }
}));