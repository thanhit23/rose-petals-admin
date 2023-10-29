import { NavLink, useLocation } from 'react-router-dom';
import { memo, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Navigated({
  babel,
  item = [],
  pathRedirect,
  open = false,
  iconAfter = null,
  iconBefore = null,
  isSidebarOpen,
  iconSvg = null,
}) {
  const location = useLocation();

  const { pathname } = location;

  const styleActive = { color: '#4E97FD' };

  const [openDropdown, setOpen] = useState(open);

  const cls = [
    'rounded w-full px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:text-[#fff !important] duration-300 cursor-pointer',
    { 'bg-[#373f5099]': openDropdown },
    { 'px-0 justify-center': !isSidebarOpen },
  ];

  useLayoutEffect(() => {
    item.map(({ path }) => {
      if (path === pathname) {
        setOpen(true);
      }
    });
  }, []);

  const element = isSidebarOpen && (
    <div className="transition duration-150 ease-out">
      {item.map(({ path, name }, i) => {
        return (
          <div key={i}>
            <NavLink
              style={({ isActive }) => (isActive ? styleActive : {})}
              className={classNames(
                'active flex items-center text-xs py-5 px-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 duration-300',
              )}
              to={path}
            >
              <div className="mr-4 flex items-center">
                <FontAwesomeIcon
                  className={classNames('w-[6px] h-[6px]', {
                    'mr-3': isSidebarOpen,
                  })}
                  icon={faCircle}
                />
              </div>
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
            'mr-3': isSidebarOpen,
          })}
          icon={iconAfter}
        />
      )}
      {iconSvg}
      {isSidebarOpen && <span className={classNames({ hidden: !isSidebarOpen })}>{babel}</span>}
      {iconBefore && isSidebarOpen && (
        <FontAwesomeIcon
          className={classNames('w-3 h-3 ml-auto duration-300', {
            hidden: !isSidebarOpen,
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
        <>
          <button className={classNames(cls, 'item-sidebar')} type="button" onClick={() => setOpen(!openDropdown)}>
            {renderElement}
          </button>
          <div className="menu-item-sidebar hidden">asdadasdasd</div>
        </>
      );
    }

    return (
      <NavLink to={pathRedirect} className={classNames(cls)}>
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
  isSidebarOpen: PropTypes.bool,
  item: PropTypes.array,
  open: PropTypes.bool,
  iconAfter: PropTypes.elementType,
  iconBefore: PropTypes.elementType,
};

export default memo(Navigated);
