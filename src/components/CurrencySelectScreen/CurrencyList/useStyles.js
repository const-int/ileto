import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: [[22, 0]],
  },
  label: {
    padding: [[0, theme.indent.sidePaddingLarge, 10]],
    fontSize: 18,
    lineHeight: "24px",
    color: theme.color.foreground
  },
  favorites: {
    paddingBottom: 20,
    marginBottom: 22,
    borderBottomWidth: 2,
    borderBottomColor: theme.color.fieldBackground,
    borderBottomStyle: "solid"
  }
}));