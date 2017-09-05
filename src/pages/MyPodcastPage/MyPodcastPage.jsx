import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import tokenService from './../../utils/tokenService';
import './MyPodcastPage.css'
// import topscoresAPI from '../../utils/topscoresAPI';
// import ScoresTable from '../../components/ScoresTable/ScoresTable'

class MyPodcastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
   }
  }
  componentWillMount(){
    fetch('/api/users', {
      method: 'GET',
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json()) 
    .then(data => console.log("data", data));
  }

  render() {
    return (
      <div>
        <NavBar 
            user={this.props.user}
            handleLogout={this.props.handleLogout}
        />
        <h1 className="MyPodcastPage-h1 center-align">My Page</h1>
      </div>
    );
  }
}

export default MyPodcastPage;