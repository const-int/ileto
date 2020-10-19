import React, { useEffect } from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import { ValueContextProvider } from "context/ValueContext";
import { CurrencyContextProvider } from "context/CurrencyContext";
import Container from "components/Container";
import Separator from "components/Separator";
import Display from 'components/Display';
import Dial from 'components/Dial';

function App() {
  const root = document.documentElement;

  useEffect(() => {
    if (!visualViewport) {
      return;
    }

    function setAppSize() {
      root.style.setProperty('--app-height', `${visualViewport.height}px`);
      root.style.setProperty('--app-top-offset', `${visualViewport.pageTop}px`);
    }

    setAppSize();

    window.addEventListener("resize", setAppSize);

    return () => window.removeEventListener("resize", setAppSize);
  }, [root.style]);

  return (
    <ThemeProvider>
        <Container>
          <CurrencyContextProvider>
            <ValueContextProvider>
              <Display />
              <Separator />
              <Dial />
            </ValueContextProvider>
          </CurrencyContextProvider>
        </Container>
    </ThemeProvider>
  );
}

export default App;
