import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import Container from "components/Container";
import Header from "components/Header";
import Display from 'components/Display';
import Dial from 'components/Dial';

function App() {
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
