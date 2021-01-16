import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'react-fastclick-alt';
import initReactFastclick from 'react-fastclick';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

initReactFastclick();

ReactDOM.render(
  <React.StrictMode>
    <FastClick><App /></FastClick>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
