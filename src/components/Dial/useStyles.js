import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints }) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "16px 26px",
    padding: [[22, 0]],
    width: 280,
  }
}));