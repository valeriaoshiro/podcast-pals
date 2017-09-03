import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from './../../components/NavBar/NavBar'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
        </Router>
      </div>
    );
  }
}

export default App;
