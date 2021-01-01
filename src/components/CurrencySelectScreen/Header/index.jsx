import React, { useState } from "react";
import BackButton from "./BackButton";
import Label from "./Label";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import useStyles from "./useStyles";

function Header() {
  const [isInputShown, setIsInputShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();

  function handleSearchButtonClick() {
    if (!isInputShown) {
      setInputValue("");
    }
    setIsInputShown(!isInputShown);
  }

  return (
    <div className={classes.root}>
      <BackButton />
      <Label text="Source currency" />
      <div className={classes.buttonWrap}>
        <SearchButton
          isInputShown={isInputShown}
          onClick={handleSearchButtonClick}
        />
        <SearchInput
          isShown={isInputShown}
          value={inputValue}
          setValue={setInputValue}
        />
      </div>
    </div>
  );
}

export default Header;
