import Authenticated from '../containers/Authenticated';
import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';

const publicRoute = publicRoutes.map(({ path, element }) => {
  return { path, element };
});

const authRoute = authRoutes.map(({ path, component: Component }) => {
  return { path, element: <Authenticated children={<Component />} /> };
});

const routes = () => [...publicRoute, ...authRoute];

export default routes;
