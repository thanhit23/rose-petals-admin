// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../../routes';
import { isAuthenticated } from '../../helpers/authenticated';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return useRoutes(routes(isAuthenticated()));
}

export default App;
