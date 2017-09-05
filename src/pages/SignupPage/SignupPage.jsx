import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import NavBar from '../../components/NavBar/NavBar';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div>
        <NavBar 
          user={this.props.user}
          handleLogout={this.props.handleLogout}
        />
        <SignupForm 
          {...this.props} 
          updateMessage={this.updateMessage} 
          handleSignup={this.props.handleSignup}  
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
};

export default SignupPage;