import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { Router, Route,  browserHistory } from 'react-router'
let route = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
)
ReactDOM.render(
  route,
  document.getElementById('root')
);
