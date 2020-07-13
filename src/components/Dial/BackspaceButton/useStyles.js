import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "76px",
    height: "76px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    color: "#666666",
    borderRadius: "50%",
    backgroundColor: "#F4F4F4 !important",

    "& path": {
      fill: theme.color.primary
    }
  },
  img: {
    position: "relative",
    left: -1
  }
}));