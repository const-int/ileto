import React from "react";
import useStyles from "components/Separator/useStyles";
import IconButton from "./IconButton";
import ArrowsSvg from "./img/arrows.svg";

function Separator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        icon={
          <img src={ArrowsSvg} alt="Arrows Icon" className={classes.icon} />
        }
        onClick={() => {}}
      />
      <div className={classes.line} />
    </div>
  );
}

export default Separator;
