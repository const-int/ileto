import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: 18,
    marginTop: 20,
    padding: [[0, theme.indent.sidePaddingLarge]],
  }
}));