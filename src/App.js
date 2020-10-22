import React, { useEffect, useState } from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import { CurrencyContextProvider } from "context/CurrencyContext";
import ViewportUtils from "utils/ViewportUtils";
import MainScreen from "components/MainScreen";
import Menus from "components/Menus";

function App() {
  const { setAppDimensionsViewportListner } = ViewportUtils;
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setAppDimensionsViewportListner()
  }, [setAppDimensionsViewportListner]);

  return (
    <ThemeProvider>
      <CurrencyContextProvider>
        <MainScreen isMenuOpen={isMenuOpen} />
        <Menus activeMenu={menu} onEntered={() => setIsMenuOpen(true)} onExit={() => setIsMenuOpen(false)} />
      </CurrencyContextProvider>
    </ThemeProvider>
  );
}

export default App;
