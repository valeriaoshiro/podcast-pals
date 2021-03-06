import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowMyPodcastList from '../../components/ShowMyPodcastList/ShowMyPodcastList';
import ShowMyFriendList from '../../components/ShowMyFriendList/ShowMyFriendList';
import tokenService from './../../utils/tokenService';
import './MyPage.css'

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFriends: []
   }
  }

  /*---------- Callback Methods ----------*/

  removeFriend = (friend) => {
    var index = this.state.myFriends.indexOf(friend);
    var newArray = [...this.state.myFriends];
    newArray.splice(index, 1);
    this.setState({myFriends: [...newArray]});
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
        // this.props.myLists: [...data.lists],
        myFriends: [...data.friends]
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
          <h1 className="MyPage-h1 center-align">My Page</h1>
          <h4 className="MyPage-h4 center-align">My Podcasts</h4>
          <ShowMyPodcastList
            user={this.props.user}
            myLists={this.props.myLists}
            addPodcast={this.props.addPodcast}
            removePodcast={this.props.removePodcast}
            history={this.props.history}
          />
          <h4 className="MyPage-h4 center-align">My Friends</h4>
          <ShowMyFriendList
            user={this.props.user}
            myLists={this.props.myLists}
            addPodcast={this.props.addPodcast}
            removePodcast={this.props.removePodcast}
            myFriends={this.state.myFriends}
            history={this.props.history}
            removeFriend={this.removeFriend}
          />
      </div>
    );
  }
}

export default MyPage;