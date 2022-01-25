import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { setVinyls } from './actions/vinylsActions.js'


class App extends Component{
  componentDidMount(){
    this.props.setVinyls()
  }
  render () {
    return (
      <p>Welcome!</p>
    )
  }
}

export default App;
