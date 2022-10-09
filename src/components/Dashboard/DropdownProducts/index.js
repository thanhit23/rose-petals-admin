import React from 'react';
import { Link } from 'react-router-dom';

function DropdownProducts({ childrenItem }) {
  const element = childrenItem.map(({ path, name }, i) => {
    return (
      <li key={i} className="relative">
        <Link
          to={path}
          className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 duration-300"
        >
          {name}
        </Link>
      </li>
    );
  });

  return (
    <ul className="relative accordion-collapse collapse transition-all duration-300 ease-out delay-75">
      {element}
    </ul>
  );
}

export default DropdownProducts;
