import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    alignItems: "center",
    gridGap: 8,
  },
  label: {
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.color.primary
  }
}));