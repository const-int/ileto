import React, { useState, createContext } from "react";

const MenuContext = createContext({ value: "" });

function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{ menu, setMenu, isMenuOpen, setIsMenuOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider };

export default MenuContext;