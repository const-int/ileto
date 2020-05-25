import React from "react";
import PropTypes from "prop-types";
import useStyles from "components/Display/UpdateDate/useStyles";

function UpdateDate({ updateDate, updateTime }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Rates updated: {updateDate} at {updateTime}
    </div>
  );
}

UpdateDate.propTypes = {
  updateTime: PropTypes.string.isRequired,
  updateDate: PropTypes.string.isRequired,
};

export default UpdateDate;
