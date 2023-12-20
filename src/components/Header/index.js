import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Modal from '../Modal';
import messages from './messages';
import TabPanel from '../TabPanel';
import TabInformation from './components/TabInformation';
import ChangePassword from './components/ChangePassword';

const renderLogout = (handleLogout, content) => (
  <ul
    aria-labelledby="dropdownDefault"
    className="dropdown-menu w-[120px] absolute bg-white right-[-5px] py-3 shadow-default rounded-[5px]"
  >
    <Modal
      title="Setting Account"
      content={content}
      trigger={props => (
        <li className="cursor-pointer px-3 py-2 hover:bg-[#f1f1f1] transition" {...props}>
          <FormattedMessage {...messages.setting} />
        </li>
      )}
    />
    <li className="cursor-pointer px-3 py-2 hover:bg-[#f1f1f1] transition" onClick={handleLogout}>
      <FormattedMessage {...messages.logout} />
    </li>
  </ul>
);

function HeaderComponent({ handleSidebar, handleLogout, onUpdate, auth }) {
  const [dropdown, setDropDown] = useState(false);

  const tabs = [
    {
      title: 'Information',
      value: 'infor',
      component: <TabInformation auth={auth} onUpdate={onUpdate} />,
    },
    {
      title: 'Change Password',
      value: 'change_password',
      component: <ChangePassword />,
    },
  ];

  const content = <TabPanel current="infor" tabs={tabs} />;

  return (
    <header className="relative z-[90]">
      <div className="absolute inset-x-0 top-0 bg-white shadow-md">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <button type="button" className="p-2" onClick={handleSidebar}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            <nav className="flex space-x-10">
              <div className="relative">
                <button type="button" onClick={() => setDropDown(!dropdown)}>
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                    alt=""
                    className="w-[40px] account-img cursor-pointer"
                  />
                </button>
                {dropdown && renderLogout(handleLogout, content)}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderComponent.prototype = {
  handleSidebar: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default HeaderComponent;
