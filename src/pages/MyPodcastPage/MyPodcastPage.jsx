import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowMyPodcastList from '../../components/ShowMyPodcastList/ShowMyPodcastList';
import tokenService from './../../utils/tokenService';
import './MyPodcastPage.css'
// import topscoresAPI from '../../utils/topscoresAPI';
// import ScoresTable from '../../components/ScoresTable/ScoresTable'

class MyPodcastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userLists: []
   }
  }

  removePodcast = (podcast) => {
    var index = this.state.userLists.indexOf(podcast);
    var newArray = [...this.state.userLists];
    newArray.splice(index, 1);
    this.setState({userLists: [...newArray]});
  }

  componentWillMount(){
    fetch('/api/users', {
      method: 'GET',
      headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => res.json()) 
    .then(data => {
      this.setState({
        userName: data.name,
        userEmail: data.email,
        userLists: [...data.lists]
      })
    });
  }

  render() {
    return (
      <div>
        <NavBar 
            user={this.props.user}
            handleLogout={this.props.handleLogout}
        />
        <h1 className="MyPodcastPage-h1 center-align">My Page</h1>
        <ShowMyPodcastList
          user={this.state.user}
          userName={this.state.userName}
          userEmail={this.state.userEmail}
          userLists={this.state.userLists}
          removePodcast={this.removePodcast}
        />
        
      </div>
    );
  }
}

export default MyPodcastPage;