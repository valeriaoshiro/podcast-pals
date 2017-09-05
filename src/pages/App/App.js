import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';
import PodcastIndexPage from '../PodcastIndexPage/PodcastIndexPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  /*---------- Callback Methods ----------*/


  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }


  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              <LandingPage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path='/podcasts' render={() => (
                userService.getUser() ?
                  <PodcastIndexPage />
                  :
                  <Redirect to='/login' />
              )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
