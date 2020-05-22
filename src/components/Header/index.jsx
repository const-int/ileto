import React from "react";
import useStyles from "components/Header/useStyles";

export default function Comp() {
  const classes = useStyles();

  function handleClick() {
    alert(113);
  }

  return (
    <div className={classes.root}>
      <button onClick={handleClick}>123</button>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus
      dolores porro, rem deserunt modi, nostrum odit quo ex quis sint minus
      quibusdam, repellat dolorum facere possimus. In, earum
    </div>
  );
}
