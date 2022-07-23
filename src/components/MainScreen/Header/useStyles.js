import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: [[0, theme.indent.sidePaddingLarge, 0, theme.indent.sidePadding]],
  }
}));