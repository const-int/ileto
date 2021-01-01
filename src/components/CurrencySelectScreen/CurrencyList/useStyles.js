import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: [[22, 0]],
    maxHeight: "calc(100vh - 82px)",
    overflowY: "scroll",
    pointerEvents: "all"
  },
  label: {
    padding: [[0, theme.indent.sidePaddingLarge, 10]],
    fontSize: 18,
    lineHeight: "24px",
    color: theme.color.foreground
  }
}));