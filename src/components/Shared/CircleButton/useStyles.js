import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: isActive ? theme.color.activeBackground : theme.color.primary,
    border: "none",
    transition: "background-color .15s ease, opacity .2s ease",

    "& path": {
      fill: isActive ? theme.color.primary : theme.color.background
    }
  })
}));