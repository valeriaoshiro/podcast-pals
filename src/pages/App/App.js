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
import AboutPage from '../AboutPage/AboutPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      myLists: []
    };
  }

  /*---------- Callback Methods ----------*/

  addPodcast = (podcast) => {
    console.log('addPodcast > podcast = ', podcast)
    this.setState({
      myLists: [...this.state.myLists, podcast]
    })
  }

  removePodcast = (podcast) => {
    var index = this.state.myLists.indexOf(podcast);
    var newArray = [...this.state.myLists];
    newArray.splice(index, 1);
    this.setState({myLists: [...newArray]});
  }

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

  componentWillMount(){
    fetch('/api/users', {
      method: 'GET',
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json()) 
    .then(data => {

      this.setState({
        myLists: [...data.lists]
      })
    });
  }

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
                myLists={this.state.myLists}
                addPodcast={this.addPodcast}
                removePodcast={this.removePodcast}
              />
            }/>
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
                  {...props}
                  handleSignup={this.handleSignup}
                  history={props.history}
                  myLists={this.state.myLists}
                  addPodcast={this.addPodcast}
                  removePodcast={this.removePodcast}
                />
              }/>
              <Route exact path='/login' render={(props) => 
                <LoginPage
                  {...props}
                  handleLogin={this.handleLogin}
                  history={props.history}
                  myLists={this.state.myLists}
                  addPodcast={this.addPodcast}
                  removePodcast={this.removePodcast}
                />
              }/>
              <Route exact path='/about' render={(props) => 
                <AboutPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  handleLogin={this.handleLogin}
                  history={props.history}
                  myLists={this.state.myLists}
                  addPodcast={this.addPodcast}
                  removePodcast={this.removePodcast}
                />
              }/>
              <Route exact path='/podcasts' render={(props) => (
                userService.getUser() ?
                  <MyPage 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    history={props.history}
                    myLists={this.state.myLists}
                    addPodcast={this.addPodcast}
                    removePodcast={this.removePodcast}
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
                    myLists={this.state.myLists}
                    addPodcast={this.addPodcast}
                    removePodcast={this.removePodcast}
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
