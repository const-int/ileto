import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 20,

    "& > div": {
      height: "100%",
      width: "100%",
      backgroundColor: theme.color.background
    }
  }
}));