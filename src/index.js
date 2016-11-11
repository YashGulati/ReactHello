import React from 'react';
import ReactDOM from 'react-dom';
import { App,InputName } from './App';
import { HelloWorld, Routeing } from './helloWorld'
import './index.css';
import { Router, Route,  browserHistory,IndexRoute } from 'react-router'
let route = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={InputName} />
      <Route path="hello" component={HelloWorld}/>
      <Route path="route" component={Routeing}/>
     </Route>
  </Router>
)
ReactDOM.render(
  route,
  document.getElementById('root')
);
