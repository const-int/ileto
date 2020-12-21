import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 140,
    width: "100%",
    padding: [[50, theme.indent.sidePadding, 10]],
    backgroundColor: theme.color.backgroundAlt
  }
}));