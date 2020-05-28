import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#FFF",
    paddingBottom: "60%"
  },
  container: {
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
    color: "#696F6C",

    "&.is-filled": {
      color: "#FFF",
      backgroundColor: theme.color.primary,
      top: -0.5,
      left: -0.5,
      width: "calc(100% + 0.5px)",
      height: "calc(100% + 0.5px)",
    }
  }
}));