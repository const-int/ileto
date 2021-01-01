import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: ({ isActive }) => ({
    position: "relative",
    backgroundColor: isActive ? theme.color.activeBackground2 : theme.color.primary,
    zIndex: 2,
  })
}));