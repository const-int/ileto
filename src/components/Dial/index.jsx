import React from "react";
import NumberButton from "components/Dial/NumberButton";
import IconButton from "components/Shared/IconButton/Primary";
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
import IconCSvg from "./img/c.svg";

function Dial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div>
          <NumberButton
            label={<img src={Icon1Svg} alt="Icon 1" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon2Svg} alt="Icon 2" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon3Svg} alt="Icon 3" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon4Svg} alt="Icon 4" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon5Svg} alt="Icon 5" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon6Svg} alt="Icon 6" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon7Svg} alt="Icon 7" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon8Svg} alt="Icon 8" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon9Svg} alt="Icon 9" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <DotButton onClick={() => {}} />
        </div>

        <div>
          <NumberButton
            label={<img src={Icon0Svg} alt="Icon 0" />}
            onClick={() => {}}
          />
        </div>

        <div>
          <IconButton
            onClick={() => {}}
            icon={
              <img
                src={IconCSvg}
                alt="Icon clear"
                style={{ width: 15, height: 18, marginRight: 1 }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

Dial.propTypes = {};

export default Dial;
