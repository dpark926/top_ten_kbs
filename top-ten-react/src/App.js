import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './containers/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirect to='/page0' />
        <Welcome/>
      </div>
    );
  }
}

export default App;
