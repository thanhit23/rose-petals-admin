import { defineMessages } from 'react-intl';

export const scope = 'Components.Order.edit';

export default defineMessages({
  label: {
    address: {
      id: `${scope}.label.address`,
      defaultMessage: 'Address',
    },
    amount: {
      id: `${scope}.label.amount`,
      defaultMessage: 'Amount',
    },
    quantity: {
      id: `${scope}.label.quantity`,
      defaultMessage: 'Quantity',
    },
    status: {
      id: `${scope}.label.status`,
      defaultMessage: 'Status',
    },
  },
  placeholder: {
    address: {
      id: `${scope}.placeholder.address`,
      defaultMessage: 'Address',
    },
    amount: {
      id: `${scope}.placeholder.amount`,
      defaultMessage: 'Amount',
    },
    quantity: {
      id: `${scope}.placeholder.quantity`,
      defaultMessage: 'Quantity',
    },
    status: {
      id: `${scope}.placeholder.status`,
      defaultMessage: 'Status',
    },
  },
  btn: {
    submit: {
      id: `${scope}.button.submit`,
      defaultMessage: 'Submit',
    },
  },
  status: {
    cancelled: {
      id: `${scope}.status.cancelled`,
      defaultMessage: 'Cancelled',
    },
    pending: {
      id: `${scope}.status.pending`,
      defaultMessage: 'Pending',
    },
    processing: {
      id: `${scope}.status.processing`,
      defaultMessage: 'Processing',
    },
    delivered: {
      id: `${scope}.status.delivered`,
      defaultMessage: 'Delivered',
    },
  },
});
