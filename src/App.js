import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class InputName extends Component {
  constructor(props) {
     super(props);
     // above statement is necessary to run
     this.state = {name: props.name};
   }
   render(){
     let nameList = []
     for(let i = 0;i <10; i++ ){
       nameList.push(
         <p key={i}>Hello {this.state.name}</p>
       )
     }
     return (
       <div>
        <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})} />
        <br/>
        {nameList}
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
            <InputName name="Tony"/>
        </p>
      </div>
    );
  }
}
/*

Next Task Print Hello {name} 10 times

*/
export default App;
