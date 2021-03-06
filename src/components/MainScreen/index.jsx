import React from "react";
import { ValueContextProvider } from "context/ValueContext";
import Container from "./Container";
import Header from "./Header";
import Board from "./Board";
import Dial from "./Dial";

function MainScreen() {
  return (
    <Container>
      <ValueContextProvider>
        <Header />
        <Board />
        <Dial />
      </ValueContextProvider>
    </Container>
  );
}

export default MainScreen;
