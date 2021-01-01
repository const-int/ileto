import React from "react";
import CircleButton from "components/Shared/CircleButton";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function SearchButton({ isInputShown, onClick }) {
  const { isActive, tapEventProps } = useOnTap(() => {});
  const classes = useStyles({ isActive });

  const searchIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d="M12.8645 11.3208L12 10.5L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L10.5 12L11.3208 12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" />
    </svg>
  );

  const clearIcon = (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
    </svg>
  );

  return (
    <CircleButton
      onClick={onClick}
      icon={isInputShown ? clearIcon : searchIcon}
      className={classes.root}
      {...tapEventProps}
    />
  );
}

export default SearchButton;
