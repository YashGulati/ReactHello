import React, { Component } from 'react'
import { Link } from 'react-router'
export class LC extends Component {
  constructor(props){
    super(props)
    this.state = {
      lifeCycle : [ "componentWillMount", "componentDidMount",
       "componentWillReceiveProps", "shouldComponentUpdate",
       "componentWillUpdate", "componentDidUpdate",
       "componentWillUnmount"]
    }
  }
  render(){
    return(
      <div>
        <br/>
        <br/>
        {this.state.lifeCycle.map( (elem,index)  => {
          return(
            <div key={index}>
              <Link  to={"/lifeCycle/"+elem}> {elem} </Link>
              <br/>
            </div>
          )
        })}
        <br/>
        <br/>
        {this.props.children}
      </div>
    )
  }
}

export class ComponentWillMount extends Component {
  constructor(props){
    super(props);
    this.state={componentWillMount : "Nothing here", whereIsUsed : "Don't know"}
  }
  componentWillMount(){
    this.setState({ componentWillMount : "componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method. This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor  instead.",
      whereIsUsed : "It is used when we need data from the API calls etc"})
  }
  render(){
    return (
      <div>
         {this.state.componentWillMount}
         <br/>
         <br/>
         <b>{this.state.whereIsUsed}</b>
      </div>
    )
  }
}

export class ComponentDidMount extends Component {
  constructor(props){
    super(props);
    this.state={componentDidMount : "componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.",
     whereIsUsed : "To Include external libarys like Google Chart"}
  }

componentDidMount(){
   this.drawCharts();
 }
 /*global someFunction google:true*/
 /*
 ESLint to take google as global varible
 */
 drawCharts(){
   var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('Pie'));

      chart.draw(data, options);
 }

  render(){
    return (
      <div>
        {this.state.componentDidMount}
        <br/>
        <br/>
        {this.state.whereIsUsed}
        <br/>
        <br/>
        <div id="Pie">
        </div>
      </div>
    )
  }
}
class Ex extends Component {
  constructor(props){
    super(props)
    this.state = { "name" : props.name }
  }
  componentWillReceiveProps(newProps){
    this.setState({ name : newProps.name})
  }
  render(){
    return (
      <div>
       {this.state.name}
      </div>
    )
  }
}
export class ComponentWillReceiveProps extends Component {
  constructor(props){
    super(props)
    this.state = {
      "componentWillReceiveProps" : "componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method. Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render. componentWillReceiveProps() is not invoked if you just call this.setState()",
      "whereIsUsed" : "On all Component where props change in time",
      "name" : "John Doe"
    }
  }
  render(){
    return (<div>
      {this.state.componentWillReceiveProps}
      <br/>
      <br/>
      {this.state.whereIsUsed}
      <br/>
      <br/>
      <Ex name={this.state.name}/>
      <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})} />
    </div>)
  }
}
class Ey extends Component {
  constructor(props){
    super(props)
    this.state = { "name" : props.name }
  }
  componentWillReceiveProps(newProps){
    this.setState({ name : newProps.name})
  }

  shouldComponentUpdate(newProps,newState){
  if(newProps.name && newProps.name.length > 12)
        return true
    return false
  }
  render(){
    console.log(this.state.name,this.state.name.length)
    return (
      <div>
       {this.state.name}
      </div>
    )
  }
}
export class ShouldComponentUpdate extends Component {
  constructor(props){
    super(props)
    this.state = {
      "ShouldComponentUpdate" : "Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior. shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true This method is not called for the initial render or when forceUpdate() is used.",
      "whereIsUsed" : "This is used to change state and props without rendering the component",
      "name" : "John Doe"
    }
  }
  render(){
    return (<div>
      {this.state.ShouldComponentUpdate}
      <br/>
      <br/>
      {this.state.whereIsUsed}
      <br/>
      <br/>
      <Ey name={this.state.name}/>
      <input value={this.state.name} onChange={ e => this.setState({ name : e.target.value})} />
    </div>)
  }
}

export class ComponentWillUpdate extends Component {
  constructor(props){
    super(props)
    this.state = {
      "componentWillUpdate" : "",
      "whereIsUsed" : ""
    }
  }
  componentWillMount(){
    this.setState({
      "componentWillUpdate" : "Don't know",
      "whereIsUsed" : "whose cares"
    })
  }
  componentWillUpdate(){
    this.setState({
      "componentWillUpdate" : "componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.",
      "whereIsUsed" : "It is used same as `componentWillMount`"
    })
  }

  render(){
    return (
      <div>
       {this.state.componentWillUpdate}
       <br/>
       <br/>
       {this.state.whereIsUsed}
       <br/>
       <br/>
       <button onClick={ e => this.setState({})}>ComponentWillUpdate</button>
      </div>
    )
  }
}

export class ComponentDidUpdate extends Component {
  constructor(props){
    super(props);
    this.state={componentDidUpdate : "componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.",
     whereIsUsed : "It is used everywhere componentDidMount is used"}
  }

componentDidMount(){
   this.drawCharts();
 }
 componentDidUpdate(){
   this.drawCharts2();
 }
 /*global someFunction google:true*/
 /*
 ESLint to take google as global varible
 */
 drawCharts(){
   var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('Pie'));

      chart.draw(data, options);
 }
 drawCharts2(){
   var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     8],
        ['Eat',      1],
        ['Commute',  2],
        ['Watch TV', 6],
        ['Sleep',    7]
      ]);

      var options = {
        title: 'My Daily Activities'
      };

      var chart = new google.visualization.PieChart(document.getElementById('Pie'));

      chart.draw(data, options);
 }


  render(){
    return (
      <div>
        {this.state.componentDidUpdate}
        <br/>
        <br/>
        {this.state.whereIsUsed}
        <br/>
        <br/>
        <button onClick={ e => this.setState({})}>ComponentDidUpdate</button>
        <div id="Pie">
        </div>
      </div>
    )
  }
}
export class ComponentWillUnmount extends Component {
  constructor(props){
    super(props)
    this.state = {
      componentWillUnmount : "componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount",
    }
  }
  componentWillUnmount() {
     console.log('Will Unmount');
   }
  render(){
    console.log("render function called")
    return(
      <div>
      {this.state.componentWillUnmount}
      <p> Please Look at log how in works </p>
      <button onClick={ e => this.setState({}) }>ComponentWillUnmount</button>
      </div>
    )
  }
}
