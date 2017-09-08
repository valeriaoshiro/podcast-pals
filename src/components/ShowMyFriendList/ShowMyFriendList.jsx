import React, {Component} from 'react';
import ShowPodcast from './../ShowPodcast/ShowPodcast'
import './ShowMyFriendList.css';

class ShowMyFriendList extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const allFriendsWithLists = [];

        if(this.props.myFriends.length > 0){
            this.props.myFriends.forEach((friend, index) => {
                allFriendsWithLists.push(
                    <div key={index}>
                        <h5>{friend.name}</h5>
                        <ShowPodcast 
                            podcasts={friend.lists}
                            history={this.props.history}
                        />
                    </div>
                )
            })
        }


        return (
            <div className="container ShowMyFriendList">
               {allFriendsWithLists}
            </div>
        )
    }
}

export default ShowMyFriendList;