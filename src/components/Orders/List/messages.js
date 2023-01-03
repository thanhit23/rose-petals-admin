import { defineMessages } from 'react-intl';

export const scope = 'Components.Order.list';

export default defineMessages({
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
