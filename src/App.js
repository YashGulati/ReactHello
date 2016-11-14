import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
export class InputName extends Component {
  default
  constructor(props) {
     super(props);
     // above statement is necessary to run
     this.state = {name: ""};
   }
   render(){
     let nameList = []
     for(let i = 0;i <10; i++ ){
       nameList.push(
         <p className="InputName" key={i}>Hello {this.state.name}</p>
       )
     }
     return (
       <div className="tony">
          <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})} />
          <br/>
          {nameList}
       </div>
     )
   }
}
export class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Link to="/" >Home</Link>
          <Link to="/hello">Hello World </Link>
          <Link to="/route">Route</Link>
          <Link to="/lifeCycle">Life Cycle</Link>
          {this.props.children}
      </div>
    );
  }
}
/*

Next Task Print Hello {name} 10 times

*/
