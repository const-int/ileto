import React, { useState, useContext } from "react";
import MenuContext from "context/MenuContext";
import BackButton from "./BackButton";
import Label from "./Label";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import useStyles from "./useStyles";

function Header() {
  const [isInputShown, setIsInputShown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { menu } = useContext(MenuContext);
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
      <Label
        text={`${
          menu === "sourceCurrencySelect" ? "Source" : "Target"
        } currency`}
      />
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
