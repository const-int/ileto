import React from "react";
import NumberButton from "components/Dial/NumberButton";
import ClearButton from "components/Dial/ClearButton";
import BackspaceButton from "components/Dial/BackspaceButton";
import useStyles from "components/Dial/useStyles";

function Dial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <NumberButton label="1" onClick={() => {}} />
        <NumberButton label="2" onClick={() => {}} />
        <NumberButton label="3" onClick={() => {}} />
        <NumberButton label="4" onClick={() => {}} />
        <NumberButton label="5" onClick={() => {}} />
        <NumberButton label="6" onClick={() => {}} />
        <NumberButton label="7" onClick={() => {}} />
        <NumberButton label="8" onClick={() => {}} />
        <NumberButton label="9" onClick={() => {}} />
        <BackspaceButton onClick={() => {}} />
        <NumberButton label="0" onClick={() => {}} />
        <ClearButton onClick={() => {}} />
      </div>
    </div>
  );
}

Dial.propTypes = {};

export default Dial;
