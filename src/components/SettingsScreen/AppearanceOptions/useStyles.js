import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: 4
  },
  button: {
    padding: [[0, theme.indent.sidePaddingLarge]],
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    pointerEvents: "all",
    transition: "background .2s ease",

    "& > svg": {
      marginRight: 9
    }
  },
  label: {
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 400,
    color: theme.color.fieldForeground
  },
  themeBlock: {
    position: "relative",
    width: 38,
    height: 28,
    borderRadius: 3,
    border: "1px solid #FFF",
    borderColor: theme.color.flagBorder,

    "&.is-selected": {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.color.primary
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: 2,
      left: 2,
      bottom: 2,
      right: 2,
      borderRadius: 2,
    },

    "&.is-light": {
      "&::after": {
        backgroundColor: "#EFEEF4",
      }
    },

    "&.is-dark": {
      "&::after": {
        backgroundColor: "#002F48",
      }
    }
  },
  title: {
    display: "grid",
    alignItems: "center",
    gridGap: 14,
    gridTemplateColumns: "38px 1fr",
  }
}));