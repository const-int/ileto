import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function SwapButton({ onClick }) {
  const classes = useStyles();
  const { isActive, tapEventProps } = useOnTap(onClick, false);

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 0L0 5H3V13H5V5H8L4 0Z" />
        <path d="M10 22L14 17L11 17L11 9L9 9L9 17L6 17L10 22Z" />
      </svg>
    </button>
  );
}

SwapButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SwapButton;
