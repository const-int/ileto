import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: 480,
    margin: "0 auto",
    maxHeight: "var(--app-height)",
    overflowY: "scroll",
    pointerEvents: "all",
    paddingTop: 82,
    position: "relative"
  }
}));