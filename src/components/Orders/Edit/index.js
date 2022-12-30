import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import { GENDER, MALE, FEMALE } from './constants';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';

function EditUserComponent({ onSubmitForUpdateUser, users }) {
  const { id } = useParams();

  const [userEdit, setUserEdit] = useState(users);

  useEffect(() => setUserEdit(users), [users]);

  const { email = '', name = '', gender = '', phoneNumber = '' } = userEdit;

  const onSubmit = () => {
    // eslint-disable-next-line no-shadow
    const { email, name, gender, phoneNumber } = userEdit;
    onSubmitForUpdateUser(id, { email, name, gender, phoneNumber });
  };

  const changeValueInput = ({ target }) => {
    // eslint-disable-next-line no-shadow,prefer-const
    let { name, value } = target;
    if (name === GENDER) {
      value = +value;
    }
    setUserEdit({ ...userEdit, [name]: value });
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
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="name"
              type="text"
              value={name}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.email}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.email}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.phone_number}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.phone_number}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              value={phoneNumber}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.gender}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
              requiredField
            />
            <div className="flex">
              <label className="flex items-center mr-2" htmlFor="female">
                <input
                  id="female"
                  className="mr-1"
                  name="gender"
                  type="radio"
                  value={FEMALE}
                  checked={gender === FEMALE}
                  onChange={changeValueInput}
                />
                <FormattedMessage {...messages.gender.female} />
              </label>
              <label className="flex items-center" htmlFor="male">
                <input
                  id="male"
                  className="mr-1"
                  name="gender"
                  type="radio"
                  value={MALE}
                  checked={gender === MALE}
                  onChange={changeValueInput}
                />
                <FormattedMessage {...messages.gender.male} />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              <FormattedMessage {...messages.btn.submit} />
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

export default EditUserComponent;
