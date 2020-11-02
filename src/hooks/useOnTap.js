import {useState} from 'react';

function useOnTap(onClick) {
  const MIN_PRESS_DURATION = 300;
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

    if (pressDuration > MIN_PRESS_DURATION) {
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