import { AuthenticateRoute } from '../components/routes';
import HomePage from '../containers/HomePage';

export default [
  {
    path: '/home',
    component: HomePage,
    route: AuthenticateRoute,
    exact: true,
  },
];
