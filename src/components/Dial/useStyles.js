import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "2px",
    backgroundColor: "#EAEAEA",
    paddingTop: 2
  }
}));