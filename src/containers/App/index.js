import React from 'react';
import { useRoutes } from 'react-router-dom';

import ToastContainer from '../ToastMessage';
import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';

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
