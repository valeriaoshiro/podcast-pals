import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div>
      <NavBar 
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <LoginForm 
        {...props}
        handleLogin={props.handleLogin}
        />
    </div>
  );
};

export default LoginPage;