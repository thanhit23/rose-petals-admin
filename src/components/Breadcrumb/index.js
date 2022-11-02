import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PrePages({ prevPage }) {
  return (
    <Link to={prevPage.path} className="flex">
      <h3 className="font-semibold text-[#333] text-xl mt-0">
        <FormattedMessage {...messages[prevPage.name]} />
      </h3>
      <span className="text-xl mx-2">/</span>
    </Link>
  );
}

function Breadcrumb({ prevPage, title }) {
  return (
    <div className="flex mb-4">
      {prevPage && <PrePages prevPage={prevPage} />}
      <h3 className="font-semibold text-xl mt-0">
        <FormattedMessage {...messages[title]} />
      </h3>
    </div>
  );
}

Breadcrumb.prototype = {
  title: PropTypes.elementType,
  prevPage: PropTypes.object,
};

export default Breadcrumb;
