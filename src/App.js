import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class InputName extends Component {
  constructor(props) {
     super(props);
     // above statement is necessary to run
     this.state = {name: ""};
   }
   render(){
     return (
       <div>
        <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})} />
        <br/>
        Hello {this.state.name}
       </div>
     )
   }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <InputName />
        </p>
      </div>
    );
  }
}
/*

Next Task pass Default name to Input Name from App to InputName as props 

*/
export default App;
