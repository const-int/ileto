import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  root: {
    color: theme.color.primary,
    backgroundColor: theme.color.secondary,
    fontSize: 30
  },
}));