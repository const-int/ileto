import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: [[60, 0, 0]],
  },
  grid: {
    width: "100%",
    maxWidth: 360,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 60px)",

    "& > button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}));