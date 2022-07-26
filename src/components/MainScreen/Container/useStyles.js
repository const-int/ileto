import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "60px 252px 1fr",
    maxWidth: 480,
    margin: "0 auto",
    height: "100%",
    backgroundColor: theme.color.boardBackground,
    visibility: ({isHidden}) => isHidden ? "hidden" : "visible",
  }
}));
