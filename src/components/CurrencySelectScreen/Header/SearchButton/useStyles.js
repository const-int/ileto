import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 40,
    width: 40,
    background: "transparent",
    border: 0,
    padding: 0,
    position: "relative",
    transition: "backgroundColor .2s ease",

    "&.is-active": {
      backgroundColor: theme.color.activeBackground,
    },

    "& svg": {
      position: "relative",
      width: 20,
      height: 20,
      zIndex: 2,
    },

    "& path": {
      fill: theme.color.primary
    }
  }
}));