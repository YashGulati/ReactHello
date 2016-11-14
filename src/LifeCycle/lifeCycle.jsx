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
 componentDidUpdate(){
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
