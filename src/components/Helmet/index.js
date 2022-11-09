import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import messages from './messages';

function HelmetComponent({ title }) {
  const intl = useIntl();

  return (
    <Helmet>
      <title>{intl.formatMessage(messages[title])}</title>
    </Helmet>
  );
}

HelmetComponent.prototype = {
  title: PropTypes.string,
};

export default HelmetComponent;
