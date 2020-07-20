import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My awesome React App
        </p>
        <Button variant="contained" color="secondary">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
