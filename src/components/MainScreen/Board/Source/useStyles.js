import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 112,
    width: "100%",
    padding: [[15, theme.indent.sidePadding]],
  }
}));