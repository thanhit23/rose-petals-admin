import HomePage from '../../containers/HomePage';
import UserPage from '../../containers/ListUser';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
    index: true,
  },
  {
    path: '/admin/users',
    component: UserPage,
    exact: true,
  },
];
