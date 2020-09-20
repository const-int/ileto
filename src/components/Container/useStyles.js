import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "2fr 40px 3fr",
    height: "100%",
    backgroundColor: theme.color.background,

    "@media(max-height: 650px)": {
      gridTemplateRows: "3fr 40px 4fr",
    }
  }
}));
