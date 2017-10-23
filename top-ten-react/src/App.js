import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './containers/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Redirect to='/welcome' />
        {/* <Route path="/welcome" component={Welcome}/> */}
        <Welcome/>
      </div>
    );
  }
}

export default App;
