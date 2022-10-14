import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import Search from './Search';

function ListProductPage() {
  return (
    <>
      <h3 className="font-semibold text-xl py-8">Products List</h3>
      <div className="flex justify-between">
        <Search />
        <Link to="/thanh"> thanh </Link>
        <button
          type="button"
          className="bg-transparent hover:bg-[rgb(78,151,253)] text-[rgb(78,151,253)] font-semibold hover:text-white py-2 px-4 border border-[rgb(78,151,253)] hover:border-transparent rounded"
        >
          <FontAwesomeIcon className="mr-2" icon={faPlus} />
          Add Product
        </button>
      </div>
    </>
  );
}

export default ListProductPage;
