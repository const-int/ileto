import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  currency: {
    color: theme.color.primary
  },
  arrow: {
    margin: [[8, 0, 0, 5]],

    "& path": {
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: theme.color.primary
    }
  }
}));