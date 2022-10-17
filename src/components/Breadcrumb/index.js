import React from 'react';
import PropTypes from 'prop-types';

function Breadcrumb({ title }) {
  return <h3 className="font-semibold text-xl mt-0 mb-4">{title}</h3>;
}

Breadcrumb.propTypes = {
  title: PropTypes.string,
};

export default Breadcrumb;
