import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiIconButton from "@material-ui/core/IconButton";

const StyledIconButton = withStyles((theme) => ({
  root: {
    padding: 0,
    height: 42,
    width: 42,
    color: "#FFF",
    backgroundColor: "#FB772F !important",
  },
}))(MuiIconButton);

function IconButton({ icon, className, onClick }) {
  return (
    <StyledIconButton className={className} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

IconButton.defaultProps = {
  className: "",
  style: {},
  onClick: () => {},
};

export default IconButton;
