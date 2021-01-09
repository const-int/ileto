import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: 400,
    background: `linear-gradient(180deg, #FFFFFF 0%, ${theme.color.primary} 100%);`,
    opacity: .5
  }
}));