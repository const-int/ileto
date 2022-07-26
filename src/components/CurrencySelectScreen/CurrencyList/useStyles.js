import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  label: {
    padding: [[0, theme.indent.sidePaddingLarge, 10]],
    fontSize: 18,
    lineHeight: "24px",
    color: theme.color.fieldForeground
  },
  footer: {
    height: 25,
    background: `linear-gradient(${theme.color.background}, ${theme.color.separator})`
  }
}));