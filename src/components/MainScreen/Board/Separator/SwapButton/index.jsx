import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import useStyles from "./useStyles";

function SwapButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button
      onClick={onClick}
      classes={{ label: classes.label, root: classes.root }}
    >
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <path d="M12.5714 15.5667V7.77778H10.2857V15.5667H6.85714L11.4286 20L16 15.5667H12.5714ZM4.57143 0L0 4.43333H3.42857V12.2222H5.71429V4.43333H9.14286L4.57143 0Z" />
      </svg>
    </Button>
  );
}

SwapButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SwapButton;
