import React from "react";
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

function Dial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <NumberButton
          label={<img src={Icon1Svg} alt="Icon 1" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon2Svg} alt="Icon 2" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon3Svg} alt="Icon 3" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon4Svg} alt="Icon 4" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon5Svg} alt="Icon 5" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon6Svg} alt="Icon 6" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon7Svg} alt="Icon 7" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon8Svg} alt="Icon 8" />}
          onClick={() => {}}
        />

        <NumberButton
          label={<img src={Icon9Svg} alt="Icon 9" />}
          onClick={() => {}}
        />

        <DotButton onClick={() => {}} />

        <NumberButton
          label={<img src={Icon0Svg} alt="Icon 0" />}
          onClick={() => {}}
        />

        <ClearButton onClick={() => {}} />
      </div>
    </div>
  );
}

Dial.propTypes = {};

export default Dial;
