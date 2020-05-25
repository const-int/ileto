import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 66,
    padding: [[0, 42]],
    backgroundColor: theme.color.primary,
    boxShadow: "0 2px 0 0 #D9D9D9",
  },
}));