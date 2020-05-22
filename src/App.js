import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import Comp from "components/Comp";
import Container from 'components/Container';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Comp />
      </Container>
    </ThemeProvider>
  );
}

export default App;
