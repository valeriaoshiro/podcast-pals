import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import './NavBar.css';

class NavBar extends Component {
  
  componentDidMount(){
    // $(".button-collapse").sideNav();  
  }  

  render(){
    let nav = this.props.user ?
      <div>
        <li key="1"><Link to="" className='NavBar-color' onClick={this.props.handleLogout} >LOG OUT</Link></li>
        <li key="2"><span className='NavBar-color'>WELCOME, {this.props.user.name}</span></li>
      </div>
      :
      <div>
        <li key="3"><Link to="/login" className='NavBar-color'>LOG IN</Link></li>
        <li key="4"><Link to="/signup" className='NavBar-color'>SIGN UP</Link></li>
      </div>;

    return (
      <nav className="NavBar">
        <div className="nav-wrapper container">
          <Link to="/" className="NavBar-color">PODCAST PALS</Link>
          <Link to="/" data-activities="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></Link>
          <ul className="right hide-on-med-and-down">
            {nav}
          </ul>
          <ul id="mobile-demo" className="side-nav">
            {nav}
          </ul>
        </div>  
      </nav>
    );

  }

};

export default NavBar;