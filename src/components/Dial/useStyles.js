import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",

    // "@media(min-height: 650px)": {
    // },

    // "@media(min-height: 700px)": {
    // },

    // "@media(min-height: 750px)": {
    // }
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