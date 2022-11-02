import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Breadcrumb from '../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../ErrorMessage';

function AddUserComponent({ onSubmitAddUser }) {
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { phoneNumber, email, name, password, gender } = errors;
  const onSubmit = data => onSubmitAddUser(data);
  const rulePhoneNumber = {
    required: {
      value: true,
      message: <FormattedMessage {...messages.message_error_required} />,
    },
    maxLength: {
      value: 15,
      message: <FormattedMessage {...messages.message_error_length} />,
    },
    minLength: {
      value: 9,
      message: <FormattedMessage {...messages.message_error_length} />,
    },
  };
  const ruleRequired = {
    required: {
      value: true,
      message: <FormattedMessage {...messages.message_error_required} />,
    },
  };
  return (
    <>
      <Breadcrumb title="add_user" />
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FormattedMessage {...messages.label_name} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <input
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={intl.formatMessage(messages.placeholder_name)}
              {...register('email', ruleRequired)}
            />
            <ErrorMessage name={name} />
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
            <input
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={intl.formatMessage(messages.placeholder_email)}
              {...register('email', ruleRequired)}
            />
            <ErrorMessage name={email} />
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              <FormattedMessage {...messages.label_password} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>

            <input
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder={intl.formatMessage(messages.placeholder_password)}
              {...register('password', ruleRequired)}
            />
            <ErrorMessage name={password} />
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

            <input
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="number"
              placeholder={intl.formatMessage(messages.placeholder_phoneNumber)}
              {...register('phoneNumber', rulePhoneNumber)}
            />
            <ErrorMessage name={phoneNumber} />
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
                  {...register('gender', ruleRequired)}
                  className="mr-1"
                  type="radio"
                  value={1}
                  id="female"
                />
                <FormattedMessage {...messages.gender_female} />
              </label>
              <label className="flex items-center" htmlFor="field-wind">
                <input
                  {...register('gender', ruleRequired)}
                  className="mr-1"
                  type="radio"
                  value={2}
                  id="male"
                />
                <FormattedMessage {...messages.gender_male} />
              </label>
            </div>
            <ErrorMessage name={gender} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FormattedMessage {...messages.btn_submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

AddUserComponent.prototype = {
  onSubmitAddUser: PropTypes.func,
};

export default AddUserComponent;
