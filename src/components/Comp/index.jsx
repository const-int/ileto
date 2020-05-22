import React from "react";
import { createUseStyles } from "react-jss";

export default function Comp() {
  const useStyles = createUseStyles((theme) => ({
    button: {
      color: theme.color.primary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.button}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ducimus
      dolores porro, rem deserunt modi, nostrum odit quo ex quis sint minus
      quibusdam, repellat dolorum facere possimus. In, earum
    </div>
  );
}
