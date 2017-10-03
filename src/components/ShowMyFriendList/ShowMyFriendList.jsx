import React, {Component} from 'react';
import ShowPodcast from './../ShowPodcast/ShowPodcast'
import {Icon} from 'react-materialize'
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
                        <h5 className="ShowMyFriendList-h5">
                            <button onClick={() => this.handleClick(friend)} className="ShowMyFriendList-button"><Icon small className="ShowMyFriendList-icon">delete</Icon></button>
                            {friend.name}
                        </h5>
                        <ShowPodcast 
                            user={this.props.user}
                            podcasts={friend.lists}
                            myLists={this.props.myLists}
                            addPodcast={this.props.addPodcast}
                            removePodcast={this.props.removePodcast}
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