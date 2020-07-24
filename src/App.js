import React, { useEffect } from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import Container from "components/Container";
import Header from "components/Header";
import Display from 'components/Display';
import Dial from 'components/Dial';

function App() {

  useEffect(() => {
    if (!visualViewport) {
      return;
    }

    const root = document.documentElement;

    root.style.setProperty('--app-height', `${visualViewport.height}px`);
    root.style.setProperty('--app-top-offset', `${visualViewport.pageTop}px`);
  }, []);

  return (
    <ThemeProvider>
      <Container>
        <Header />
        <Display />
        <Dial />
      </Container>
    </ThemeProvider>
  );
}

export default App;
