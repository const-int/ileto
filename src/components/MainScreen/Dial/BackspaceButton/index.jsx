import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function BackspaceButton({ onClick, onLongPress }) {
  const { isActive, tapEventProps } = useOnTap(onClick, true);
  const classes = useStyles({ isActive });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isActive && !timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        onLongPress();
      }, 1000);
    } else {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [isActive, onLongPress]);

  return (
    <button type="button" className={classes.root} {...tapEventProps}>
      <span className={classes.label}>
        <div className={classes.circle}>
          <svg width="18" height="18" viewBox="0 0 20 20">
            <path
              className={classes.path}
              d="M20 8.75H4.7875L11.775 1.7625L10 0L0 10L10 20L11.7625 18.2375L4.7875 11.25H20V8.75Z"
            />
          </svg>
        </div>
      </span>
    </button>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
};

export default BackspaceButton;
