import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/DotButton/useStyles";
import { Button } from "@material-ui/core";

function BackspaceButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.root}>
      <span className={classes.dotContainer}>
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.50831C0 2.16501 0.060506 1.83832 0.181518 1.52824C0.313531 1.21816 0.489549 0.952381 0.709571 0.730897C0.929593 0.509413 1.19362 0.332226 1.50165 0.199335C1.80968 0.0664451 2.13971 0 2.49175 0C2.84378 0 3.16832 0.0664451 3.46535 0.199335C3.77338 0.332226 4.0374 0.509413 4.25743 0.730897C4.48845 0.952381 4.66997 1.21816 4.80198 1.52824C4.93399 1.83832 5 2.16501 5 2.50831C5 2.86268 4.93399 3.19491 4.80198 3.50498C4.66997 3.80399 4.48845 4.06423 4.25743 4.28571C4.0374 4.5072 3.77338 4.67885 3.46535 4.80066C3.16832 4.93355 2.84378 5 2.49175 5C2.13971 5 1.80968 4.93355 1.50165 4.80066C1.19362 4.67885 0.929593 4.5072 0.709571 4.28571C0.489549 4.06423 0.313531 3.80399 0.181518 3.50498C0.060506 3.19491 0 2.86268 0 2.50831Z"
            fill="#666666"
          />
        </svg>
      </span>
    </Button>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackspaceButton;
