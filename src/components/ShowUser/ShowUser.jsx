import React, {Component} from 'react';
import {Icon} from 'react-materialize';
import ShowPodcast from '../ShowPodcast/ShowPodcast';
import tokenService from './../../utils/tokenService';
import './ShowUser.css';


import './ShowUser.css';

class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleClick = (user) => {
        console.log("*** handleClick user ", user)
        fetch('/api/users/addFriend', {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + tokenService.getToken(),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                friend: user
            })
        })
        .then(response => {
            // this.props.history.push('/podcasts');
        })
    }

    render(){
        console.log(this.props.users[0])
        var users = this.props.users[0].map((user, index) => {
            return (
                <div key={index}>
                    <h4>{user.name} <button onClick={() => this.handleClick(user)} className="ShowUser-button"><Icon small className="ShowUser-icon">star</Icon></button>
</h4>
                    <ShowPodcast
                        podcasts={user.lists}
                        history={this.props.history}
                    />
                </div> 
            )
            
        });

        return (
            <div className="container">
                {users}
            </div>
        );

    }

};

export default ShowUser;