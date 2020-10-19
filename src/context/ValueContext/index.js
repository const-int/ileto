import React, { useState, createContext } from "react";

const ValueContext = createContext({ value: "" });

function ValueContextProvider({ children }) {
  const [value, setValue] = useState("");

  function formatValue(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <ValueContext.Provider
      value={{ value, setValue, formatValue }}
    >
      {children}
    </ValueContext.Provider>
  );
}

export { ValueContextProvider };

export default ValueContext;