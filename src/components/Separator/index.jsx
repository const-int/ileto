import React, { useContext } from "react";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "components/Separator/useStyles";
import IconButton from "./IconButton";
import ArrowsSvg from "./img/arrows.svg";

function Separator() {
  const classes = useStyles();
  const { swap } = useContext(CurrencyContext);

  return (
    <div className={classes.root}>
      <IconButton
        icon={
          <img src={ArrowsSvg} alt="Arrows Icon" className={classes.icon} />
        }
        onClick={swap}
      />
      <div className={classes.line} />
    </div>
  );
}

export default Separator;
