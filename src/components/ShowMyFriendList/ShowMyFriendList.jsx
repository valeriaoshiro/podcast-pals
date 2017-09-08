import React, {Component} from 'react';
import ShowPodcast from './../ShowPodcast/ShowPodcast'
import './ShowMyFriendList.css';

var allFriendsWithLists = [];

class ShowMyFriendList extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    

    render(){
        if(this.props.myFriends.length > 0){
            this.props.myFriends.forEach((friend, index) => {
                if(friend.lists.length === 0){
                    allFriendsWithLists.push(
                        <div key={index}>
                            <h5>{friend.name}</h5>
                        </div>
                    )
                } else {
                    allFriendsWithLists.push(
                        <div key={index}>
                            <h5>{friend.name}</h5>
                            <ShowPodcast 
                                podcasts={friend.lists}
                                history={this.props.history}
                            />
                        </div>
                    )
                }
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