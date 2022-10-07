import React, { Component } from 'react';

import Register from '../../components/Register';

class RegisterPage extends Component {
  render() {
    return (
      <div className="min-h-screen bg-[rgb(192,132,252)] flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-[rgb(216,180,254)] -top-5 -left-16 z-0 transform rotate-45 hidden md:block" />
        <div className="absolute w-48 h-48 rounded-xl bg-[rgb(216,180,254)] -bottom-6 -right-10 transform rotate-12 hidden md:block" />
        <Register />
        <div className="w-40 h-40 absolute bg-[rgb(216,180,254)] rounded-full top-0 right-12 hidden md:block" />
        <div className="w-20 h-40 absolute bg-[rgb(216,180,254)] rounded-full bottom-20 left-10 transform rotate-45 hidden md:block" />
      </div>
    );
  }
}

export default RegisterPage;
