import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child'

class App extends Component {
//Initial Render Start
  constructor(){
    super();
    this.state = {
      name: 'parent',
      props: 'child props',
      testing : 'I will arrive'
    }
    console.log('parent constructor');
  }

  componentDidMount(){
    console.log('parent componentDidMount run once');
  }
//Initial Render Ends

//RE-Render Start
  changeState = () => {
    this.setState({
      name: 'parent updated',
      props: 'child props',
      testing : 'Arrived?'
    })
  }

  changeState2 = () => {
    this.setState({
      name: 'parent updated again',
      props: 'new child props',
      testing : 'Arrived now?'
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('parent shouldComponentUpdate',(nextProps.child !== nextState.props));
    console.log('nextProps',nextProps);
    console.log('nextState',nextState);
    return (nextProps.child !== nextState.props)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('parent componentDidUpdate');
  }

  unmountChild = () => {
    this.setState({name:'UNMOUNTING'})
  }

  componentWillUnmount(){
    console.log('parent componentWillUnmount');
  }
//RE-Render Ends
  render() {
    console.log('parent render')
    if(this.state.name === 'UNMOUNTING'){
      return(<div/>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child child={this.state.props} testing={this.state.testing}/>
        <button onClick={this.changeState}>Change State</button>
        <button onClick={this.changeState2}>Change State Again</button>
        <button onClick={this.unmountChild}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
