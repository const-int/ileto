import React from 'react';
import logo from 'img/logo.svg';
import {createUseStyles} from 'react-jss';
import Comp from "comp";
import './App.css';

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
  },
})


function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Comp />
      <header className={classes.myButton}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
