import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// import { isAuthenticated } from '../../helpers/authenticated';

function AuthenticateRoute({ component: Component, location, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return <>xxx</>;
        // return <Component {...props} {...rest} />;
        // if (isAuthenticated !== 'null') {
        //   return <Component {...props} {...rest} />;
        // }
        //
        // return (
        //   <Navigate
        //     to={{ pathname: '/login', state: { from: props.location } }}
        //   />
        // );
      }}
    />
  );
}

export default AuthenticateRoute;
