import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route index exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    );
  }
}

export default App;
