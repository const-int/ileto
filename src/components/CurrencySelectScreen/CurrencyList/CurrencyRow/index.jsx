import React from "react";
import CurrencySelectButton from "./CurrencySelectButton";
import FavoriteButton from "./FavoriteButton";

function CurrencyRow({ code, name }) {
  return (
    <div style={{ position: "relative" }}>
      <CurrencySelectButton code={code} name={name} />
      <FavoriteButton code={code} />
    </div>
  );
}

export default CurrencyRow;
