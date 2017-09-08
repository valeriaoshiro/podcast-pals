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
import MyPage from '../MyPage/MyPage';
import SearchPage from '../SearchPage/SearchPage';
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
            <Route exact path='/' render={(props) => 
              <LandingPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                history={props.history}
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
              <Route exact path='/podcasts' render={(props) => (
                userService.getUser() ?
                  <MyPage 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    history={props.history}
                  />
                  :
                  <Redirect to='/login' />
              )} />
              <Route exact path='/search' render={(props) => (
                userService.getUser() ?
                  <SearchPage 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    history={props.history}
                  />
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
