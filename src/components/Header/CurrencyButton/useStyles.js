import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  currency: {
    color: theme.color.primary
  },
  arrow: {
    margin: [[6, 0, 0, 5]],

    "& line": {
      stroke: theme.color.primary
    }
  }
}));