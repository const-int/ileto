import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import Header from "components/Header";
import Container from 'components/Container';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
