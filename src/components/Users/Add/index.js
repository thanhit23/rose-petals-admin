import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../../ErrorMessage';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import { required, minLength, maxLength } from '../../../utils/validation';
import { FEMALE, MALE } from './constants';

function AddUserComponent({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const phoneNumberValidation = {
    ...required(messages.message.required),
    ...minLength(messages.message.length),
    ...maxLength(messages.message.length),
  };

  const { phoneNumber, email, name, password, gender } = errors;

  return (
    <>
      <Breadcrumb title="add_user" />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              message={messages.placeholder.name}
              validate={register('name', required(messages.message.required))}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.email}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              message={messages.placeholder.email}
              validate={register('email', required(messages.message.required))}
            />
            <ErrorMessage name={email} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.password}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              message={messages.placeholder.password}
              validate={register(
                'password',
                required(messages.message.required),
              )}
            />
            <ErrorMessage name={password} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.phone_number}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="number"
              message={messages.placeholder.phone_number}
              validate={register('phoneNumber', phoneNumberValidation)}
            />
            <ErrorMessage name={phoneNumber} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.gender}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
              requiredField
            />
            <div className="flex">
              <label
                className="flex text-sm items-center mr-2"
                htmlFor="female"
              >
                <input
                  className="mr-1"
                  type="radio"
                  value={FEMALE}
                  id="female"
                  {...register('gender', required(messages.message.required))}
                />
                <FormattedMessage {...messages.gender.female} />
              </label>
              <label className="flex text-sm items-center" htmlFor="male">
                <input
                  className="mr-1"
                  type="radio"
                  value={MALE}
                  id="male"
                  {...register('gender', required(messages.message.required))}
                />
                <FormattedMessage {...messages.gender.male} />
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
