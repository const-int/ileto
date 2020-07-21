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
    backgroundColor: [[theme.color.fieldBackground], "!important"],

    "& svg": {
      position: "relative",
      left: -2
    },

    "& path": {

      "&:nth-child(1)": {
        stroke: theme.color.primary,
        fill: theme.color.primary,
      },

      "&:nth-child(2)": {
        stroke: theme.color.background
      },

      "&:nth-child(3)": {
        stroke: theme.color.background
      }
    },
  },
}));