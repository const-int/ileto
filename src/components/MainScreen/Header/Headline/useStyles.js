import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginLeft: 5,
    color: theme.isDarkMode ? theme.color.foreground : theme.color.primary,
    fontSize: 18,
    lineHeight: "24px",
    fontWeight: 900,
  }
}));