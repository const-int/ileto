import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 82,
    padding: [[0, theme.indent.sidePaddingLarge]],
    display: "grid",
    gridTemplateColumns: "20px 1fr 40px",
    gridGap: theme.indent.sidePaddingLarge,
    alignItems: "center",
    backgroundColor: theme.color.backgroundAlt,
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: theme.color.fieldBackground
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