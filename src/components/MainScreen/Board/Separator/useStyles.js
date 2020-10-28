import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  button: {
    position: 'absolute',
    top: -20,
    left: theme.indent.sidePadding
  },
  exchangeRate: {
    position: 'absolute',
    top: -20,
    right: theme.indent.sidePadding
  }
}));