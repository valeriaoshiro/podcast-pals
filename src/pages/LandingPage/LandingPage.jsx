import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const LandingPage = (props) => {
    return (
    <div className="GamePage">
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />
    LandingPage
    </div>
  );

}

export default LandingPage;  