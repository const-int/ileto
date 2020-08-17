import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: theme.color.background,
    paddingBottom: 20
  }
}));
