import LoginPage from '../../containers/LoginPage';
import Register from '../../components/Register';
import NotFound from '../../components/NotFound';

export default [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  { path: '*', element: <NotFound /> },
];
