import { defineMessages } from 'react-intl';

export const scope = 'Containers.Sidebar';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'User',
  },
  user_list: {
    id: `${scope}.user.list`,
    defaultMessage: 'List Users',
  },
  user_add: {
    id: `${scope}.user.add`,
    defaultMessage: 'Add User',
  },
  product: {
    id: `${scope}.product`,
    defaultMessage: 'Product',
  },
  product_list: {
    id: `${scope}.product.list`,
    defaultMessage: 'List Products',
  },
  product_add: {
    id: `${scope}.product.add`,
    defaultMessage: 'Add Product',
  },
  product_category: {
    id: `${scope}.product.category`,
    defaultMessage: 'Category',
  },
  product_brand: {
    id: `${scope}.product.brand`,
    defaultMessage: 'Brand',
  },
  order: {
    id: `${scope}.order`,
    defaultMessage: 'Order',
  },
  order_list: {
    id: `${scope}.order.list`,
    defaultMessage: 'Order List',
  },
  order_detail: {
    id: `${scope}.order.detail`,
    defaultMessage: 'Order Detail',
  },
});
