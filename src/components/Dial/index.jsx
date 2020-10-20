import React, { useContext } from "react";
import ValueContext from "context/ValueContext";
import NumberButton from "components/Dial/NumberButton";
import DotButton from "components/Dial/DotButton";
import useStyles from "components/Dial/useStyles";
import Icon1Svg from "./img/1.svg";
import Icon2Svg from "./img/2.svg";
import Icon3Svg from "./img/3.svg";
import Icon4Svg from "./img/4.svg";
import Icon5Svg from "./img/5.svg";
import Icon6Svg from "./img/6.svg";
import Icon7Svg from "./img/7.svg";
import Icon8Svg from "./img/8.svg";
import Icon9Svg from "./img/9.svg";
import Icon0Svg from "./img/0.svg";
import ClearButton from "./ClearButton";

const digitMap = {
  0: Icon0Svg,
  1: Icon1Svg,
  2: Icon2Svg,
  3: Icon3Svg,
  4: Icon4Svg,
  5: Icon5Svg,
  6: Icon6Svg,
  7: Icon7Svg,
  8: Icon8Svg,
  9: Icon9Svg,
};

function Dial() {
  const DOT = ".";

  const classes = useStyles();
  const { setValue, value } = useContext(ValueContext);

  function handleClearButtonClick() {
    setValue("");
  }

  function handleDigitButtonClick(digit) {
    // First input limitations
    if (!value && [DOT, 0].includes(digit)) {
      return null;
    }

    // Dot limitations
    const split = value.split(DOT);
    const hasDot = split.length === 2;
    const isDot = digit === DOT;

    if (hasDot && (isDot || split[1].length === 2)) {
      return null;
    } else if (isDot && value.length > 6) {
      return null;
    }

    // Length limitations
    if (value.replace(DOT, "").length >= 8) {
      return null;
    }

    setValue(value + digit);
  }

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {new Array(9).fill(0).map((v, index) => (
          <NumberButton
            label={<img src={digitMap[index + 1]} alt={`Icon ${index + 1}`} />}
            onClick={() => handleDigitButtonClick(index + 1)}
            key={index + 1}
          />
        ))}

        <DotButton onClick={() => handleDigitButtonClick(DOT)} />

        <NumberButton
          label={<img src={digitMap[0]} alt="Icon 0" />}
          onClick={() => handleDigitButtonClick(0)}
        />

        <ClearButton onClick={handleClearButtonClick} />
      </div>
    </div>
  );
}

Dial.propTypes = {};

export default Dial;
