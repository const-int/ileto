import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/BackspaceButton/useStyles";
import { Button } from "@material-ui/core";

function BackspaceButton({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={onClick} className={classes.button}>
        <svg width="24" height="18" viewBox="0 0 24 18">
          <path d="M22 0H7C6.68223 0.000521167 6.36977 0.0814942 6.09175 0.23537C5.81372 0.389246 5.57918 0.611014 5.41 0.88L0 9L5.41 17.11C5.57861 17.3803 5.81277 17.6035 6.09073 17.7591C6.3687 17.9147 6.68146 17.9976 7 18H22C22.5299 17.9984 23.0377 17.7872 23.4125 17.4125C23.7872 17.0377 23.9984 16.5299 24 16V2C23.9984 1.47005 23.7872 0.962265 23.4125 0.587535C23.0377 0.212805 22.5299 0.00158273 22 0ZM22 16H7.07L2.4 9L7.06 2H22V16Z" />
          <path d="M10.41 14L14 10.41L17.59 14L19 12.59L15.41 9L19 5.41L17.59 4L14 7.59L10.41 4L9 5.41L12.59 9L9 12.59L10.41 14Z" />
        </svg>
      </Button>
    </div>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackspaceButton;
