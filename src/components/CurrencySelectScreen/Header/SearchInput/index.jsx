import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

function SearchInput({ value, setValue, isShown, ref }) {
  const classes = useStyles({ isShown });
  const inputRef = createRef();

  function handleChange(e) {
    const { value: val } = e.target;

    setValue(val);
  }

  useEffect(() => {
    if (isShown) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [inputRef, isShown]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      className={classes.root}
    />
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SearchInput;
