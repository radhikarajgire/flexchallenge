import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateContextProvider from "./components/stateContext/stateContext"


ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


