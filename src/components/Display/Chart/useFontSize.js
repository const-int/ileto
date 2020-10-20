/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from "react";

function useFontSize(value, valueEl, valueContainerEl) {
  const INITIAL_FONT_SIZE = 28;
  const [valueFontSize, setValueFontSize] = useState(INITIAL_FONT_SIZE);

  function fitText(fontSize) {
    if (!value) {
      return setValueFontSize(INITIAL_FONT_SIZE);
    }

    const STEP = 1;
    const size = fontSize ? fontSize : valueFontSize;
    const nextFontSize = size - STEP;
    const fits =
      valueEl.current.offsetWidth <= valueContainerEl.current.offsetWidth - 5;

    if (!fits) {
      setValueFontSize(nextFontSize);

      setTimeout(() => {
        fitText(nextFontSize);
      }, 16);
    }

  }

  useEffect(() => {
    fitText();
  }, [value]);

  return valueFontSize;
}

export default useFontSize;