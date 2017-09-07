import React, {Component} from 'react';
import ShowPodcast from '../ShowPodcast/ShowPodcast';

import './ShowUser.css';

class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        console.log(this.props.users[0])
        var users = this.props.users[0].map((user, index) => {
            return (
                <div key={index}>
                    <h4>{user.name}</h4>
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