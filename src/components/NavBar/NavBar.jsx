import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';
import './NavBar.css';

class NavBar extends Component {
  
  render(){
    let nav = this.props.user ?
      <div>  
        <NavItem key="6" href="/search">SEARCH</NavItem>
        <NavItem key="5" href="/podcasts">MY PAGE</NavItem> 
        <NavItem key="2">&nbsp;<span className="NavBar-pipe">|</span>&nbsp;&nbsp;&nbsp;<span className='NavBar-color'>WELCOME, {this.props.user.name}</span></NavItem>
        <NavItem key="1" href="" className='NavBar-color' onClick={this.props.handleLogout} >LOG OUT</NavItem>
      </div>
      :
        <div>
          <NavItem key="3" href="/login" className='NavBar-color'>LOG IN</NavItem>
          <NavItem key="4" href="/signup" className='NavBar-color'>SIGN UP</NavItem>
        </div>;

    return (
      <Navbar brand='PODCAST PALS' right>
        {nav}
      </Navbar>
    );

  }

};

export default NavBar;