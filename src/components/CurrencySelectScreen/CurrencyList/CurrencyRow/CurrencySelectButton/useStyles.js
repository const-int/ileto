import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    height: 50,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: [[0, theme.indent.sidePaddingLarge]],
    background: isActive ? theme.color.activeBackground : "transparent",
    border: "none",
    outline: "none",
    pointerEvents: "all",
    transition: "background .2s ease"
  }),
  code: {
    width: 66,
    height: 36,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    lineHeight: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    backgroundColor: theme.color.fieldBackground,
    color: theme.color.fieldForeground,
    borderRadius: 4,
    letterSpacing: "0.75px"
  },
  name: {
    paddingLeft: 15,
    color: theme.color.fieldForeground,
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 400,
    transition: "color .2s ease"
  },
}));