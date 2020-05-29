import React from "react";
import DialButton from "components/Dial/DialButton";
import useStyles from "components/Dial/useStyles";
import BackspaceSvg from "components/Dial/img/backspace.svg";

function Dial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DialButton label="1" />
      <DialButton label="2" />
      <DialButton label="3" />
      <DialButton label="4" />
      <DialButton label="5" />
      <DialButton label="6" />
      <DialButton label="7" />
      <DialButton label="8" />
      <DialButton label="9" />
      <DialButton
        label={<img src={BackspaceSvg} alt="Backspace" />}
        action="delete"
      />
      <DialButton label="0" />
      <DialButton label="C" action="clear" />
    </div>
  );
}

Dial.propTypes = {};

export default Dial;
