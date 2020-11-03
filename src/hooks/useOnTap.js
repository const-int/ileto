import {useState} from 'react';

function useOnTap(onClick, isQuickPress = false) {
  const MIN_PRESS_DURATION = 400;
  const MIN_QUICK_PRESS_DURATION = 200;

  const minDuration = isQuickPress ? MIN_QUICK_PRESS_DURATION : MIN_PRESS_DURATION;
  const [isActive, setActive] = useState(false);
  const [pressTime, setPressTime] = useState(null);

  function handlePress() {
    onClick();
    setActive(true);
    setPressTime(new Date().getTime())
  }

  function handleRelease() {
    const releaseTime = new Date().getTime();
    const pressDuration = releaseTime - pressTime;

    if (pressDuration > minDuration) {
      setActive(false);
    } else {
      setTimeout(() => {
        setActive(false);
      }, pressDuration)
    }
  }

  const tapEventProps = {
    onTouchStart: handlePress,
    onTouchEnd: handleRelease,
    onMouseDown: handlePress,
    onMouseUp: handleRelease,
  }

  return { isActive, tapEventProps }
}

export default useOnTap;
