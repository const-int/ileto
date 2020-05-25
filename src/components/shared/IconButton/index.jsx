import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiIconButton from "@material-ui/core/IconButton";

const StyledIconButton = withStyles((theme) => ({
  root: {
    padding: 0,
    height: 40,
    width: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2) !important",
  },
}))(MuiIconButton);

function IconButton({ icon, size, className, onClick }) {
  return (
    <StyledIconButton
      TouchRippleProps={{ style: { color: "rgba(255, 255, 255)" } }}
      onClick={onClick}
    >
      {icon}
    </StyledIconButton>
  );
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: "",
  size: "md",
  onClick: () => {},
};

export default IconButton;
