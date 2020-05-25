import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 66,
    padding: [[0, 20]],
    backgroundColor: theme.color.primary,
  }
}));