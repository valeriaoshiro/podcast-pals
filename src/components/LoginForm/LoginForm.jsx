import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginForm.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      // invalid credentials - don't alert in YOUR app :)
      .catch(err => alert('Invalid Credentials!'));
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center-align LoginForm-h1">Log In</h1>
        <form className="col s6 offset-s3" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" placeholder="Email" id="email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" className="validate" id="password" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn LoginForm-button">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/' className="LoginForm-cancel">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LoginForm;