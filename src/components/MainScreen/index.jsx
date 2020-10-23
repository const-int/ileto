import React from "react";
import { ValueContextProvider } from "context/ValueContext";
import Container from "./Container";
import Separator from "./Separator";
// import Display from "./Display";
import Dial from "./Dial";

function MainScreen({ isMenuOpen }) {
  return (
    <Container isHidden={isMenuOpen}>
      <ValueContextProvider>
        {/* <Display /> */}
        <Separator />
        <Dial />
      </ValueContextProvider>
    </Container>
  );
}

export default MainScreen;
