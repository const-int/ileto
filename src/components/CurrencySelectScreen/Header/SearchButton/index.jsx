import React, { useContext } from "react";
import classnames from "classnames";
import MenuContext from "context/MenuContext";
import useOnTap from "hooks/useOnTap";
import useStyles from "./useStyles";

function SearchButton() {
  const classes = useStyles();
  const { setMenu } = useContext(MenuContext);
  const { isActive, tapEventProps } = useOnTap(() => {});

  return (
    <button
      type="button"
      className={classnames(classes.root, { "is-active": isActive })}
      onClick={() => setMenu("")}
      {...tapEventProps}
    >
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M20 8.75H4.7875L11.775 1.7625L10 0L0 10L10 20L11.7625 18.2375L4.7875 11.25H20V8.75Z" />
      </svg>
    </button>
  );
}

export default SearchButton;
