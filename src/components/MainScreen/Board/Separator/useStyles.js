import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",

    "&::after": {
      content: '""',
      display: "block",
      top: -1,
      left: 0,
      height: 2,
      backgroundColor: theme.color.buttonBackground
    }
  },
  button: {
    position: 'absolute',
    top: -20,
    left: theme.indent.sidePaddingLarge
  },
  exchangeRate: {
    position: 'absolute',
    top: -20,
    right: theme.indent.sidePaddingLarge
  }
}));