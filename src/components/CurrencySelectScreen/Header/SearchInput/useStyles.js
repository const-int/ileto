import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isShown }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
    width: isShown ? "calc(100vw - 48px)" : 40,
    height: 40,
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: isShown ? 52: 0,
    borderStyle: "solid",
    borderColor: theme.color.primary,
    backgroundColor: theme.color.background,
    pointerEvents: "all",
    maxWidth: 388,
    borderRadius: 20,
    transition: "width .25s cubic-bezier(0.22, 0.61, 0.36, 1), padding .25s ease",
    outline: "none",
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 600,
    color: theme.color.fieldForeground
  })
}));