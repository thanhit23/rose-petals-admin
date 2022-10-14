import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <LoadingIndicator />
      <ToastContainer />
      {useRoutes(routes())}
    </>
  );
}

export default App;
