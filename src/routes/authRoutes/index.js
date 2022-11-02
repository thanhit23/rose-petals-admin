import HomePage from '../../containers/HomePage';
import ListUser from '../../containers/ListUser';
import AddUser from '../../containers/AddUser';
import EditUser from '../../containers/EditUser';
import Category from '../../containers/Category';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
    index: true,
  },
  {
    path: '/admin/users',
    component: ListUser,
    exact: true,
  },
  {
    path: '/admin/user',
    component: AddUser,
    exact: true,
  },
  {
    path: '/admin/user/edit/:id',
    component: EditUser,
    exact: true,
  },
  {
    path: '/admin/category',
    component: Category,
    exact: true,
  },
];
