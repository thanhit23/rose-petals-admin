import { Navigate, Outlet } from 'react-router-dom';
import LoginPage from '../containers/LoginPage';
import HomePage from '../containers/HomePage';
import Register from '../components/Register';

const routes = isAuthenticated => [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  {
    path: '/',
    element: isAuthenticated ? <HomePage /> : <Navigate to="/login" />,
    children: [
      { path: 'a', element: <Navigate to="/register" replace /> },
      {
        path: 'member',
        element: <Outlet />,
        children: [{ path: 'login', element: <LoginPage /> }],
      },
    ],
  },
];

export default routes;
