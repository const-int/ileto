import React, { useEffect } from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import { CurrencyContextProvider } from "context/CurrencyContext";
import { MenuContextProvider } from "context/MenuContext";
import ViewportUtils from "utils/ViewportUtils";
import MainScreen from "components/MainScreen";
import Menu from "components/Menu";

function App() {
  const { setAppDimensionsViewportListener } = ViewportUtils;

  useEffect(() => {
    setAppDimensionsViewportListener();
  }, [setAppDimensionsViewportListener]);

  return (
    <ThemeProvider>
      <CurrencyContextProvider>
        <MenuContextProvider>
          <MainScreen />
          <Menu />
        </MenuContextProvider>
      </CurrencyContextProvider>
    </ThemeProvider>
  );
}

export default App;
