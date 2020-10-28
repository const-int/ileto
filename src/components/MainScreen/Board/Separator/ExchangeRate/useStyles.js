import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: [[0, 17, 0, 8]],
    height: 40,
    border: "2px solid #F2F5F6",
    backgroundColor: theme.color.background,
    borderRadius: 99,
  },
  icon: {
    margin: [[0, 12, 1, 0]],

    "& path": {
      fill: theme.color.primary,
    }
  },
  rate: {
    marginTop: 1,
    fontSize: 12,
    fontWeight: 700,
    lineHeight: "20px",
    color: theme.color.primary,
  }
}));