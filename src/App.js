import React from 'react';
import ThemeProvider from 'providers/ThemeProvider';
import Header from "components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
