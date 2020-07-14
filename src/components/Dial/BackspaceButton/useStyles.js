import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "76px",
    height: "76px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    color: theme.color.ripple,
    borderRadius: "50%",
    backgroundColor: "#F4F4F4 !important",

    "& svg": {
      position: "relative",
      left: -2
    },

    "& path": {
      fill: theme.color.primary
    },
  },
}));