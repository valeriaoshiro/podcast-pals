import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.signup(this.state)
      // successfully signed up - show GamePage
      .then(() => {
        this.props.handleSignup();
        this.props.history.push('/')
      })
      // invalid user data
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="row">
        <h1 className="center-align SearchForm-h1">Search</h1>
        <form className="col s6 offset-s3" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" className="validate" placeholder="Name" id="name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
              <label for="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="email" className="validate" id="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" className="validate" id="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" className="validate" id="passwordValidate" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)} />
              <label for="passwordValidate">Confirm Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn SignupForm-button" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/' className="SignupForm-cancel">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchForm;
