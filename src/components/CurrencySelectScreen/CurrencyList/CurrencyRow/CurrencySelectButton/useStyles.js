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
  description: {
    textAlign: "left"
  },
  code: {
    color: theme.color.foreground,
    fontSize: 16,
    lineHeight: "18px",
    textTransform: "uppercase",
    fontWeight: 400,
  },
  name: {
    color: theme.color.foregroundSecondary,
    fontSize: 14,
    lineHeight: "18px",
    fontWeight: 400,
  },
  flag: {
    width: 48,
    height: 36,
    flexShrink: 0,
    marginRight: 14,
    borderRadius: 4,
    boxShadow: `0 0 0 1px ${theme.color.flagBorder}`,
    backgroundColor: theme.color.fieldBackground,
    overflow: "hidden"
  }
}));