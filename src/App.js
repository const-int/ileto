import React, { useEffect, useState } from 'react';
import initReactFastclick from 'react-fastclick';
import ThemeProvider from 'providers/ThemeProvider';
import { CurrencyContextProvider } from "context/CurrencyContext";
import ViewportUtils from "utils/ViewportUtils";
import MainScreen from "components/MainScreen";
import Menus from "components/Menus";

function App() {
  const { setAppDimensionsViewportListner } = ViewportUtils;
  // eslint-disable-next-line no-unused-vars
  const [menu, setMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setAppDimensionsViewportListner();
    initReactFastclick();
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
