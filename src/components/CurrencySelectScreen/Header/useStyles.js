import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    height: 60,
    padding: [[0, theme.indent.sidePaddingLarge]],
    display: "grid",
    gridTemplateColumns: "1fr 38px",
    gridGap: theme.indent.sidePaddingLarge,
    alignItems: "center",
    backgroundColor: theme.color.menuHeaderBackground,
    zIndex: 20
  },
  label: {
    fontSize: 22,
    lineHeight: "30px",
    fontWeight: 600,
    color: theme.color.foreground
  },
  buttonWrap: {
    position: "relative",
    width: 40,
    height: 40,
    zIndex: 2
  }
}));