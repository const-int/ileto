import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  icon: {
    width: 16,
    height: 20,
  },
  line: {
    position: "absolute",
    top: "50%",
    marginTop: -1,
    width: "100%",
    height: 2,
    backgroundColor: theme.color.fieldBackground,
  }
}));