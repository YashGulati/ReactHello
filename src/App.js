import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello World
          {/*
            Use a input tag and display Hello {name}
            For this
            create construtor and declare state object with key name.
            in Input tag onChange function calls this.setState function
          */}
        </p>
      </div>
    );
  }
}

export default App;
