import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 25,

    "@media(min-height: 650px)": {
      paddingTop: 40
    },

    "@media(min-height: 700px)": {
      paddingTop: 50
    },

    "@media(min-height: 750px)": {
      paddingTop: 60
    }
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