import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import { MALE, FEMALE } from './constants';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import ErrorMessage from '../../ErrorMessage';
import { required, email as emailValidation, maxLength, minLength } from '../../../utils/validation';

function EditUserComponent({ submit, users }) {
  const { gender, name, email, phoneNumber } = users;
  const defaultValues = { gender, name, email, phoneNumber };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    !isEmpty(users) && reset(defaultValues);
  }, [users]);

  const { name: nameError, email: emailError, phoneNumber: phoneNumberError } = errors;

  const onSubmit = data => {
    // eslint-disable-next-line no-shadow
    const { gender } = data;
    submit({ ...data, gender: +gender });
  };

  return (
    <>
      <Breadcrumb prevPage={{ path: '/admin/users', name: 'list_user' }} title="edit_user" />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              validate={register('name', required(messages.message.required))}
            />
            <ErrorMessage name={nameError} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.email}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.email}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              validate={register('email', {
                ...required(messages.message.required),
                ...emailValidation(messages.message.email),
              })}
            />
            <ErrorMessage name={emailError} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.phone_number}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="phoneNumber"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.phone_number}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              validate={register('phoneNumber', {
                ...required(messages.message.required),
                ...maxLength(messages.message.length),
                ...minLength(messages.message.length),
              })}
            />
            <ErrorMessage name={phoneNumberError} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.gender}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="gender"
              requiredField
            />
            <div className="flex">
              <label className="flex items-center mr-2" htmlFor="female">
                {users && (
                  <input
                    id="female"
                    className="mr-1"
                    name="gender"
                    type="radio"
                    value={FEMALE}
                    defaultChecked={gender ? gender === FEMALE : false}
                    {...register('gender')}
                  />
                )}
                <FormattedMessage {...messages.gender.female} />
              </label>
              <label className="flex items-center" htmlFor="male">
                {users && (
                  <input
                    id="male"
                    className="mr-1"
                    name="gender"
                    type="radio"
                    value={MALE}
                    defaultChecked={gender ? gender === MALE : false}
                    {...register('gender')}
                  />
                )}
                <FormattedMessage {...messages.gender.male} />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
