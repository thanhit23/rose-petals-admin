import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Navigated({
  babel,
  item,
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
  useEffect(() => {
    item.map(({ path }) => {
      if (path === pathname) {
        setOpen(true);
      }
      if (path === pathname && !isSidebar) {
        childrenActive(true);
        setOpen(true);
      }
    });
  }, []);
  const element =
    isSidebar &&
    item.map(({ path, name }, i) => {
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
    });
  return (
    <li>
      <button
        className={classNames(
          'rounded w-full px-[18px] flex items-center text-sm h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap hover:bg-[#007bff] duration-300 cursor-pointer',
          { 'hover:pl-[25px]': openDropdown },
        )}
        type="button"
        onClick={() => setOpen(!openDropdown)}
      >
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
      </button>
      {openDropdown && element}
    </li>
  );
}

export default memo(Navigated);
