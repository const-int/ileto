import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#FFF",
    paddingBottom: "60%"
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
    color: "#696F6C",
    borderRadius: 0,

    "& path": {
      fill: theme.color.primary
    }
  }
}));