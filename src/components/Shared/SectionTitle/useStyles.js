import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: [[22, theme.indent.sidePaddingLarge, 10]],
    fontSize: 18,
    lineHeight: "24px",
    color: theme.color.fieldForeground
  }
}));