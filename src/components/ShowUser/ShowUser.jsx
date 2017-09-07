import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <li key={index}>
                    <Link to='/'>{user.name}</Link>
                </li> 
            )
            
        });

        return (
            <div className="container">
                <ul>
                    {users}
                </ul>    
            </div>
        );

    }

};

export default ShowUser;