import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "fit-content(0) 40px 1fr",
    gridGap: 60,
    padding: [[60, 0]],
    height: "100%",
    backgroundColor: theme.color.background,

    "@media(max-height: 700px)": {
      gridGap: 50,
      padding: [[50, 0]],
    },

    "@media(max-height: 650px)": {
      gridGap: 40,
      padding: [[40, 0]],
    },

    "@media(max-height: 560px)": {
      gridGap: 30,
      padding: [[30, 0]],
    },
  }
}));
