import HomePage from '../../containers/HomePage';
import ListUser from '../../containers/Users/List';
import AddUser from '../../containers/Users/Add';
import EditUser from '../../containers/Users/Edit';
import ListCategory from '../../containers/Categories/List';
import AddCategory from '../../containers/Categories/Add';
import EditCategory from '../../containers/Categories/Edit';
import ListProduct from '../../containers/Products/List';
import AddProduct from '../../containers/Products/Add';
import EditProduct from '../../containers/Products/Edit';
import ListBrand from '../../containers/Brands/List';
import AddBrand from '../../containers/Brands/Add';

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
    path: '/admin/categories',
    component: ListCategory,
    exact: true,
  },
  {
    path: '/admin/category',
    component: AddCategory,
    exact: true,
  },
  {
    path: '/admin/category/edit/:id',
    component: EditCategory,
    exact: true,
  },
  {
    path: '/admin/products',
    component: ListProduct,
    exact: true,
  },
  {
    path: '/admin/product',
    component: AddProduct,
    exact: true,
  },
  {
    path: '/admin/product/edit/:id',
    component: EditProduct,
    exact: true,
  },
  {
    path: '/admin/brands',
    component: ListBrand,
    exact: true,
  },
  {
    path: '/admin/brand',
    component: AddBrand,
    exact: true,
  },
];
