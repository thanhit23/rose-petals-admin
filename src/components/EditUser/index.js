import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { find as findLodash } from 'lodash';
import PropTypes from 'prop-types';

import Breadcrumb from '../Breadcrumb';
import messages from './messages';

function EditUserComponent({ onSubmitForUpdateUser, users }) {
  const { id } = useParams();
  const result = findLodash(users, { id });
  const { email, phoneNumber, name, gender } = result;
  const [userEdit, setUserEdit] = useState({
    email,
    phoneNumber,
    name,
    gender,
  });
  const {
    email: emailUser,
    name: nameUser,
    gender: genderUser,
    phoneNumber: phoneNumberUser,
  } = userEdit;
  const onSubmit = () => onSubmitForUpdateUser(id, userEdit);
  const changeValueInput = ({ target }) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = target;
    setUserEdit({ ...userEdit, [name]: [value] });
  };
  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/users', name: 'list_user' }}
        title="edit_user"
      />
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FormattedMessage {...messages.label_name} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <FormattedMessage {...messages.placeholder_name}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={nameUser}
                  onChange={changeValueInput}
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              <FormattedMessage {...messages.label_email} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <FormattedMessage {...messages.placeholder_email}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={emailUser}
                  onChange={changeValueInput}
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              <FormattedMessage {...messages.label_phoneNumber} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <FormattedMessage {...messages.placeholder_phoneNumber}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="number"
                  value={phoneNumberUser}
                  placeholder={msg}
                  onChange={changeValueInput}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              <FormattedMessage {...messages.label_gender} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <div className="flex">
              <label className="flex items-center mr-2" htmlFor="field-rain">
                <input
                  className="mr-1"
                  type="radio"
                  value={1}
                  checked={genderUser === 1}
                  id="female"
                  onChange={changeValueInput}
                />
                <FormattedMessage {...messages.gender_female} />
              </label>
              <label className="flex items-center" htmlFor="field-wind">
                <input
                  className="mr-1"
                  type="radio"
                  value={2}
                  checked={genderUser === 2}
                  id="male"
                  onChange={changeValueInput}
                />
                <FormattedMessage {...messages.gender_male} />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              <FormattedMessage {...messages.btn_submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditUserComponent.prototype = {
  onSubmitForUpdateUser: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = state => {
  const {
    user: { users },
  } = state;
  return {
    users,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(EditUserComponent);
