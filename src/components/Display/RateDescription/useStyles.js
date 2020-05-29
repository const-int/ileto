import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 5,
    width: "100%",
    fontSize: 20,
    lineHeight: "24px",
    color: '#696F6C',
    textAlign: "center"
  },
  currencyCode: {
    fontFamily: theme.font.mono
  }
}));