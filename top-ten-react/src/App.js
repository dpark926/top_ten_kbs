import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Welcome from './containers/Welcome'
import Page1 from './components/Page1.js'
import Page2 from './components/Page2.js'
import Page3 from './components/Page3.js'
import Page4 from './components/Page4.js'
import Page5 from './components/Page5.js'
import Page6 from './components/Page6.js'
import Page7 from './components/Page7.js'
import Page8 from './components/Page8.js'
import Page9 from './components/Page9.js'
import Page10 from './components/Page10.js'

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
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/page4" component={Page4}/>
        <Route path="/page5" component={Page5}/>
        <Route path="/page6" component={Page6}/>
        <Route path="/page7" component={Page7}/>
        <Route path="/page8" component={Page8}/>
        <Route path="/page9" component={Page9}/>
        <Route path="/page10" component={Page10}/>
      </div>
    );
  }
}

export default App;
