import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30
  },
  grid: {
    width: "100%",
    maxWidth: 360,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 60px)",

    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
}));