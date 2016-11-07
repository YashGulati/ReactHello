import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     // above statement is necessary to run
     this.state = {name: ""};
   }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})}/>
          <br/>
          Hello {this.state.name}
        </p>
      </div>
    );
  }
}

export default App;
