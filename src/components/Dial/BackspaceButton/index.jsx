import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Dial/BackspaceButton/useStyles";
import { Button } from "@material-ui/core";

function BackspaceButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classes.root}>
      <svg className={classes.img} width="26" height="20" viewBox="0 0 26 20">
        <path d="M23.8333 0H7.58333C7.23909 0.000579075 6.90059 0.0905491 6.59939 0.261522C6.2982 0.432496 6.04411 0.678905 5.86083 0.977778L0 10L5.86083 19.0111C6.0435 19.3114 6.29717 19.5595 6.59829 19.7324C6.89942 19.9053 7.23825 19.9973 7.58333 20H23.8333C24.4074 19.9982 24.9575 19.7636 25.3635 19.3472C25.7695 18.9308 25.9983 18.3666 26 17.7778V2.22222C25.9983 1.63339 25.7695 1.06918 25.3635 0.652817C24.9575 0.23645 24.4074 0.00175859 23.8333 0V0ZM23.8333 17.7778H7.65917L2.6 10L7.64833 2.22222H23.8333V17.7778Z" />
        <path d="M11.301 15.3999L15.25 11.4509L19.199 15.3999L20.75 13.8489L16.801 9.8999L20.75 5.9509L19.199 4.3999L15.25 8.3489L11.301 4.3999L9.75 5.9509L13.699 9.8999L9.75 13.8489L11.301 15.3999Z" />
      </svg>
    </Button>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackspaceButton;
