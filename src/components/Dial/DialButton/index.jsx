import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useStyles from "components/Dial/DialButton/useStyles";

function DialButton({ label, action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classnames(classes.container, {
          "is-filled": action === "clear",
        })}
      >
        {label}
      </div>
    </div>
  );
}

DialButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  action: PropTypes.string,
};

DialButton.defaultProps = {
  action: "",
};

export default DialButton;
