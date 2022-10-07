import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isAuthenticated } from '../../helpers/authenticated';

// eslint-disable-next-line react/prop-types
const RouteAuthenticated = ({ component: Component, path }) => {
  if (!isAuthenticated()) return <Redirect to="/login" />;

  return <Route component={Component} path={path} />;
};

export default RouteAuthenticated;
