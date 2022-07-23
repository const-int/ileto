import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
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
    // eslint-disable-next-line
  }, [isActive]);

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      {...tapEventProps}
    >
      <span className={classes.label}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 8.75H4.7875L11.775 1.7625L10 0L0 10L10 20L11.7625 18.2375L4.7875 11.25H20V8.75Z"
            fill="#0658FF"
          />
        </svg>
      </span>
    </button>
  );
}

BackspaceButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackspaceButton;
