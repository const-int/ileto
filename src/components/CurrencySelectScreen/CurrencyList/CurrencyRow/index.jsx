import React from "react";
import CurrencySelectButton from "./CurrencySelectButton";
import FavoriteButton from "./FavoriteButton";

function CurrencyRow({ code, name, countryCode, rootEl }) {
  return (
    <div style={{ position: "relative" }}>
      <CurrencySelectButton code={code} name={name} countryCode={countryCode} />
      <FavoriteButton code={code} rootEl={rootEl} />
    </div>
  );
}

export default CurrencyRow;
