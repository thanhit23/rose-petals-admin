/*
 * Login Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Search';

export default defineMessages({
  product: {
    id: `${scope}.product`,
    defaultMessage: 'Search Product...',
  },
});
