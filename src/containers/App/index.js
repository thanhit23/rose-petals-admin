import React from 'react';
import { useRoutes } from 'react-router-dom';
import { compose } from 'redux';

import ToastContainer from '../ToastMessage';
import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';
import injectReducer from '../../utils/injectReducer';
import reducer from '../Users/List/reducers';
import reducerLoadingTable from '../LoadingIndicatorTable/reducers';

function App() {
  return (
    <>
      <LoadingIndicator />
      <ToastContainer />
      {useRoutes(routes())}
    </>
  );
}

const withReducer = injectReducer({ key: 'user', reducer });
const withReducerLoadingTable = injectReducer({
  key: 'loadingTable',
  reducer: reducerLoadingTable,
});

export default compose(withReducer, withReducerLoadingTable)(App);
