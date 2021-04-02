import React from "react";
import CurrencySelectButton from "./CurrencySelectButton";
import FavoriteButton from "./FavoriteButton";

function CurrencyRow({ code, name, countryCode }) {
  return (
    <div style={{ position: "relative" }}>
      <CurrencySelectButton code={code} name={name} countryCode={countryCode} />
      <FavoriteButton code={code} />
    </div>
  );
}

export default CurrencyRow;
