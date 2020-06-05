import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "2px",
    width: "100%",
    position: "relative",
    maxWidth: 480,
    backgroundColor: "#EAEAEA",
    paddingTop: 2,

    "&::before, &::after": {
      content: "''",
      position: "absolute",
      top: 0,
      width: 2,
      height: "100%",
      backgroundColor: "#EAEAEA"
    },

    "&::before": {
      left: -2,
    },

    "&::after": {
      right: -2,
    },
  }
}));