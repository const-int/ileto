import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: 12,
    padding: [[0, theme.indent.sidePaddingLarge]],
  },
  title: {
    display: "grid",
    gridTemplateColumns: "38px 1fr",
    gridGap: 14,
  },
  icon: {
    marginTop: 3
  },
  version: {
    fontSize: 14,
    lineHeight: "18px",
    fontWeight: 400,
    color: theme.color.fieldForeground
  },
  status: {
    fontSize: 12,
    lineHeight: "16px",
    fontWeight: 400,
    color: theme.color.foregroundSecondary
  },
  description: {
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.color.fieldForeground,
    marginTop: 14,
  }
}));