import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    height: 86,
    padding: [[0, 20]],

  },
  swapButton: {
    margin: [[0, 42]],

    "& svg path": {
      stroke: theme.color.background,
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }
  }
}));