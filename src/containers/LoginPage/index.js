import React, { Component } from 'react';

import Login from '../../components/Login';

class LoginPage extends Component {
  render() {
    return (
      <div className="min-h-screen bg-[rgb(249,249,249)] flex justify-center items-center">
        <Login />
      </div>
    );
  }
}

export default LoginPage;
