import { NavLink, useLocation } from 'react-router-dom';
import { memo, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Navigated({
  babel,
  item = [],
  pathRedirect,
  open = false,
  iconAfter = null,
  iconBefore = null,
  childrenActive,
  isSidebar,
}) {
  const location = useLocation();

  const { pathname } = location;

  const styleActive = { color: '#4E97FD' };

  const [openDropdown, setOpen] = useState(open);

  const cls = [
    'rounded w-full px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-[#fff !important] duration-300 cursor-pointer',
    { 'bg-[#373f5099]': openDropdown },
  ];

  useLayoutEffect(() => {
    item.map(({ path }) => {
      if (path === pathname) {
        setOpen(true);
      }
      if (path === pathname && !isSidebar) {
        childrenActive(true);
      }
    });
  }, []);

  const element = isSidebar && (
    <div className="transition duration-150 ease-out">
      {item.map(({ path, name }, i) => {
        return (
          <div key={i}>
            <NavLink
              style={({ isActive }) => (isActive ? styleActive : undefined)}
              className={classNames(
                'active flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 duration-300',
              )}
              to={path}
            >
              {name}
            </NavLink>
          </div>
        );
      })}
    </div>
  );

  const renderElement = (
    <>
      {iconAfter && (
        <FontAwesomeIcon
          className={classNames('w-5 h-5', {
            'mr-3': isSidebar,
          })}
          icon={iconAfter}
        />
      )}
      <span className={classNames({ hidden: !isSidebar })}>{babel}</span>
      {iconBefore && (
        <FontAwesomeIcon
          className={classNames('w-3 h-3 ml-auto duration-300', {
            hidden: !isSidebar,
            'rotate-[-90deg]': !openDropdown,
          })}
          icon={faChevronDown}
        />
      )}
    </>
  );

  const buttonRender = () => {
    if (!pathRedirect) {
      return (
        <button
          className={classNames([
            ...cls,
            { 'px-0 justify-center': !isSidebar },
          ])}
          type="button"
          onClick={() => setOpen(!openDropdown)}
        >
          {renderElement}
        </button>
      );
    }

    return (
      <NavLink
        to={pathRedirect}
        className={({ isActive }) => {
          if (isActive) {
            return classNames([...cls, { 'px-0 justify-center': !isSidebar }]);
          }
          return classNames(cls);
        }}
      >
        {renderElement}
      </NavLink>
    );
  };

  return (
    <li>
      {buttonRender()}
      {openDropdown && element}
    </li>
  );
}

Navigated.prototype = {
  babel: PropTypes.string,
  isSidebar: PropTypes.bool,
  item: PropTypes.array,
  open: PropTypes.bool,
  childrenActive: PropTypes.func,
  iconAfter: PropTypes.elementType,
  iconBefore: PropTypes.elementType,
};

export default memo(Navigated);
