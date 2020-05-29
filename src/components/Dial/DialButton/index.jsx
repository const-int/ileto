import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import useStyles from "components/Dial/DialButton/useStyles";
import { Button } from "@material-ui/core";

function DialButton({ label, action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classnames(classes.button, {
          "is-filled": action === "clear",
        })}
      >
        {label}
      </Button>
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
