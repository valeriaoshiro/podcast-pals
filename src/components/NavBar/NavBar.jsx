import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import './NavBar.css';

class NavBar extends Component {

  render(){
    let nav = this.props.user ?
      <div>
        <NavItem key="2" href="/search" className='NavBar-color'>SEARCH</NavItem>
        <NavItem key="5" href="/podcasts" className='NavBar-color'>MY PAGE</NavItem>
        <NavItem key="1" href="" className='NavBar-color' onClick={this.props.handleLogout} >LOG OUT</NavItem>
      </div>
      :
      <div>
        <NavItem key="3" href="/login" className='NavBar-color'>LOG IN</NavItem>
        <NavItem key="4" href="/signup" className='NavBar-color'>SIGN UP</NavItem>
      </div>;

    var logo = <div className="valign-wrapper"><span>PODCAST PALS&nbsp;</span><img className="NavBar-logoImg" src={'https://i.imgur.com/X6dwDe4.png'} alt="logo"/></div>
    console.log(logo)

    return (
      <Navbar brand={logo} className="NavBar" right>
        {nav}
      </Navbar>
    );

  }

};

export default NavBar;