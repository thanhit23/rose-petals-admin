import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../../helpers/authenticated';

function RouteAuthenticated() {
  if (isAuthenticated()) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
}

export default RouteAuthenticated;
