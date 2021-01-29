import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function BackspaceButton({ onClick }) {
  const SEQUENTIAL_DELETION_DELAY = 500;
  const SEQUENTIAL_DELETION_FREQUENCY = 40;

  const { isActive, tapEventProps } = useOnTap(onClick, true);
  const classes = useStyles({ isActive });
  const pressTimeout = useRef(null);
  const deletionInterval = useRef(null);

  function startSequentialDeletion() {
    deletionInterval.current = setInterval(() => {
      onClick();
    }, SEQUENTIAL_DELETION_FREQUENCY);
  }

  useEffect(() => {
    if (isActive && !pressTimeout.current) {
      pressTimeout.current = setTimeout(() => {
        startSequentialDeletion();
      }, SEQUENTIAL_DELETION_DELAY);
    } else {
      clearTimeout(pressTimeout.current);
      clearTimeout(deletionInterval.current);
      pressTimeout.current = null;
      deletionInterval.current = null;
    }
  }, [isActive]);

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
};

export default BackspaceButton;
