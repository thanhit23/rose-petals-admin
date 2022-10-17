import React from 'react';

export default function DropdownComponent() {
  return (
    <>
      <div className="max-w-lg mx-auto">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
          data-dropdown-toggle="dropdown"
        >
          Dropdown button
        </button>
        <div
          className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
          id="dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm">Bonnie Green</span>
            <span className="block text-sm font-medium text-gray-900 truncate">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-1" aria-labelledby="dropdown">
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-5">
          This dropdown element is part of a larger, open-source library of
          Tailwind CSS components. Learn more by going to the official{' '}
          <a
            className="text-blue-600 hover:underline"
            href="https://flowbite.com/docs/getting-started/introduction/"
            target="_blank"
            rel="noreferrer"
          >
            Flowbite Documentation
          </a>
          .
        </p>
      </div>
      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js" />
    </>
  );
}
