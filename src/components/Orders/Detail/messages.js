import { defineMessages } from 'react-intl';

export const scope = 'Components.Order.detail';

export default defineMessages({
  label: {
    customer_note: {
      id: `${scope}.label.customer_note`,
      defaultMessage: "Customer's Note",
    },
    shipping_address: {
      id: `${scope}.label.shipping_address`,
      defaultMessage: 'Shipping Address',
    },
  },
  placeholder: {
    customer_note: {
      id: `${scope}.placeholder.customer_note`,
      defaultMessage: "Customer's Note...",
    },
    shipping_address: {
      id: `${scope}.placeholder.shipping_address`,
      defaultMessage: 'Shipping Address...',
    },
  },
  button: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
  order_id: {
    id: `${scope}.order_id`,
    defaultMessage: 'Order ID',
  },
  placed_on: {
    id: `${scope}.placed_on`,
    defaultMessage: 'Placed on',
  },
  order_status: {
    id: `${scope}.order_status`,
    defaultMessage: 'Order Status',
  },
  product_properties: {
    id: `${scope}.product_properties`,
    defaultMessage: 'Product properties',
  },
  total_summary: {
    id: `${scope}.total_summary`,
    defaultMessage: 'Total Summary',
  },
  subtotal: {
    id: `${scope}.subtotal`,
    defaultMessage: 'Subtotal',
  },
  shipping_fee: {
    id: `${scope}.shipping_fee`,
    defaultMessage: 'Shipping fee',
  },
  discount: {
    id: `${scope}.discount`,
    defaultMessage: 'Discount',
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  paid_method: {
    id: `${scope}.paid_method`,
    defaultMessage: 'Paid by Credit/Debit Card',
  },
});
