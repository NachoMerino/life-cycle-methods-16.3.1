import React, { Component } from 'react';

class Child extends Component {

  constructor(){
    super();
    this.state = {
      name: 'child',
      props: 'child props',
      width: window.innerWidth
    }
    console.log('child constructor');
  }

  componentDidMount(){
    console.log('child componentDidMount run once');
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('child getDerivedStateFromProps');
    console.log('nextProps',nextProps);
    console.log('prevState',prevState);
    if(nextProps.child !== prevState.props){
      console.log('I am triggered!!!')
      return {
       newValueForState: 'I am a new value created in getDerivedStateFromProps' 
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('child shouldComponentUpdate',(nextProps.child !== nextState.props));
    console.log('nextProps',nextProps);
    console.log('nextState',nextState);
    //return false;
    return nextProps.child !== nextState.props;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('child getSnapshotBeforeUpdate');
    console.log('prevProps',prevProps);
    console.log('prevState',prevState);
    if(this.state.width < 1000){
      console.log('width smaller than 1000, taking snapshot')
      return this.state.width;
    } else {
      return ('ahmed rules')
    }
  }

  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('child componentDidUpdate');
    console.log('prevProps',prevProps);
    console.log('prevState',prevState);
    console.log('snapshot',snapshot);
  }


  render() {
    console.log('child render')

    return (
      <div className="App">
        <p>{this.props.child}</p>
        <p>{this.state.name}</p>
        <p>{this.props.testing}</p>
        <p>width of the screen: {this.state.width}</p>
      </div>
    );
  }
}

export default Child;
