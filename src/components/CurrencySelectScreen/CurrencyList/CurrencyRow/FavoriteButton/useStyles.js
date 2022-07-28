import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: 82,
    background: "transparent",
    border: "none",
    pointerEvents: "all",
    padding: [[0, theme.indent.sidePaddingLarge]],

    "&::after": {
      content: "''",
      position: "absolute",
      top: "calc(50% - 20px)",
      left: "calc(50% - 20px)",
      width: 40,
      height: 40,
      opacity: isActive ? 1 : 0,
      borderRadius: "50%",
      backgroundColor: theme.isDarkMode ? theme.color.activeBackground : theme.color.activeBackground2,
      transition: "opacity .2s ease"
    },
  }),
  svg: {
    zIndex: 2,
    position: "relative",
    width: 21,
    height: 20,

    "& path": {
      fill: theme.color.primary
    }
  },
}));