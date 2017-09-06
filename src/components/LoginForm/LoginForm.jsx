import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Input} from 'react-materialize';
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
        this.props.history.push('/podcasts');
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
        {/*<form className="col s6 offset-s3" onSubmit={this.handleSubmit} >
        <Row>  
          <Input s={12} type="email" label="Email" />
          <Input s={12} type="password" label="Password" />
          <Input s={12} type="submit">Log In</Input>&nbsp;&nbsp;&nbsp;
          <Link to='/' className="LoginForm-cancel">Cancel</Link>*/}

        {/*</Row>*/}
      </div>
    );
  }
};

export default LoginForm;