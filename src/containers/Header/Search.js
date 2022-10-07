import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <form>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {/* eslint-disable-next-line react/void-dom-elements-no-children */}
          <input
            type="search"
            id="default-search"
            className="block p-3 pl-10 w-[400px] text-sm text-[#111] bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Search Mockups, Logos..."
            required
            onChange={this.props.handleChane}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-[#6366f1] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

export default Header;
