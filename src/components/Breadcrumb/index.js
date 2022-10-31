import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Breadcrumb({ prevPage, title }) {
  return (
    <div className="flex mb-4">
      {prevPage && (
        <Link to={prevPage.path} className="flex">
          <h3 className="font-semibold text-[#333] text-xl mt-0">
            {prevPage.name}
          </h3>
          <span className="text-xl mx-2">/</span>
        </Link>
      )}
      <h3 className="font-semibold text-xl mt-0">{title}</h3>
    </div>
  );
}

Breadcrumb.prototype = {
  title: PropTypes.elementType,
  prevPage: PropTypes.object,
};

export default Breadcrumb;
