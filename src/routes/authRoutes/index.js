import HomePage from '../../containers/HomePage';
import UserPage from '../../containers/UserPage';

export default [
  {
    path: '/admin',
    component: HomePage,
    exact: true,
    index: true,
  },
  {
    path: '/admin/user',
    component: UserPage,
    exact: true,
  },
];
