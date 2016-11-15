import React from 'react';
import ReactDOM from 'react-dom';
import { App,InputName } from './App';
import { HelloWorld, Routeing } from './helloWorld'
import { LC, ComponentWillMount, ComponentDidMount,ComponentWillReceiveProps, ShouldComponentUpdate, ComponentWillUpdate, ComponentDidUpdate, ComponentWillUnmount } from './LifeCycle/lifeCycle'
import './index.css';
import { Router, Route,  browserHistory,IndexRoute } from 'react-router'
let route = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={InputName} />
      <Route path="hello" component={HelloWorld}/>
      <Route path="route" component={Routeing}/>
      <Route path="lifeCycle" component={LC} >
        <Route path="componentWillMount" component={ComponentWillMount}/>
        <Route path="componentDidMount" component={ComponentDidMount}/>
        <Route path="componentWillReceiveProps" component={ComponentWillReceiveProps}/>
        <Route path="shouldComponentUpdate" component={ShouldComponentUpdate}/>
        <Route path="componentWillUpdate" component={ComponentWillUpdate}/>
        <Route path="componentDidUpdate" component={ComponentDidUpdate}/>
        <Route path="componentWillUnmount" component={ComponentWillUnmount}/>

      </Route>
     </Route>
  </Router>
)
ReactDOM.render(
  route,
  document.getElementById('root')
);
