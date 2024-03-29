import React, { useContext } from "react";
import MenuContext from "context/MenuContext";
import CircleButton from "components/Shared/CircleButton";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function CloseButton() {
  const { setMenu } = useContext(MenuContext);
  const { isActive, tapEventProps } = useOnTap(() => {});
  const classes = useStyles({ isActive });

  return (
    <CircleButton
      onClick={() => setMenu(null)}
      icon={
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={classes.cross}
        >
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="black"
          />
        </svg>
      }
      className={classes.root}
      {...tapEventProps}
    />
  );
}

export default CloseButton;
