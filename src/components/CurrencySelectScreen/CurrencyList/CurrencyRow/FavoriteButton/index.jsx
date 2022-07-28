import React, { useContext, useState } from "react";
import CurrencyContext from "context/CurrencyContext";
import useStyles from "./useStyles";

function FavoriteButton({ code, rootEl }) {
  const FAVORITE_SECTION_HEIGHT = 70;
  const LIST_ITEM_HEIGHT = 50;
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });

  const {
    favoriteCurrencyCodes,
    addFavoriteCurrencyCode,
    removeFavoriteCurrencyCode,
  } = useContext(CurrencyContext);

  const isFavorite = Boolean(favoriteCurrencyCodes[code]);

  function handleClick() {
    if (isActive) {
      return;
    }

    setIsActive(true);

    const prevScrollTop = rootEl.scrollTop;

    setTimeout(() => {
      setIsActive(false);

      if (isFavorite) {
        removeFavoriteCurrencyCode(code);
      } else {
        addFavoriteCurrencyCode(code);
      }

      const prevFavCount = Object.keys(favoriteCurrencyCodes).length;
      const rowShift = (isFavorite ? -1 : 1) * LIST_ITEM_HEIGHT;
      let menuShift = 0;

      if (isFavorite && prevFavCount === 1) {
        menuShift = -1 * FAVORITE_SECTION_HEIGHT;
      }

      if (!isFavorite && prevFavCount === 0) {
        menuShift = FAVORITE_SECTION_HEIGHT;
      }

      rootEl.scrollTop = prevScrollTop + menuShift + rowShift;
    }, 150);
  }

  return (
    <button type="button" className={classes.root} onClick={handleClick}>
      {isFavorite ? (
        <svg className={classes.svg} viewBox="0 0 21 20">
          <path d="M10.5 16.0737L16.989 20L15.267 12.6L21 7.62105L13.4505 6.97895L10.5 0L7.5495 6.97895L0 7.62105L5.733 12.6L4.011 20L10.5 16.0737Z" />
        </svg>
      ) : (
        <svg className={classes.svg} viewBox="0 0 21 20">
          <path d="M21 7.62105L13.4505 6.96842L10.5 0L7.5495 6.97895L0 7.62105L5.733 12.6L4.011 20L10.5 16.0737L16.989 20L15.2775 12.6L21 7.62105ZM10.5 14.1053L6.552 16.4947L7.602 11.9895L4.116 8.9579L8.715 8.55789L10.5 4.31579L12.2955 8.56842L16.8945 8.96842L13.4085 12L14.4585 16.5053L10.5 14.1053Z" />
        </svg>
      )}
    </button>
  );
}

export default FavoriteButton;
