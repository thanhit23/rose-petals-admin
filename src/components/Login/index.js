import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import messages from './messages';
import ErrorMessage from '../ErrorMessage';
import { required, email as emailValidation } from '../../utils/validation';
import InputWithFormatMessage from '../InputWithFormatMessage';

function Login({ handleOnSubmit }) {
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const { email, password } = errors;

  const onSubmit = data => handleOnSubmit(data);

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-start-3 col-span-2 col-end-11">
          <div className="flex flex-col md:flex-row p-5 bg-white rounded-md shadow-md">
            <div className="w-full md:w-7/12 z-[1] m-4 lg:max-w-xl">
              <div className="m-auto lg:max-w-xl">
                <img
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
                  alt="mobile-login-concept-illustration_114360-135"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="w-full md:w-5/12 p-6 m-auto lg:max-w-xl">
              <div className="flex ">
                <div
                  id=""
                  className="flex align-center text-[18px] px-[10px] py-[8px] border-b-2 border-solid border-[#19c7a9] text-[#19c7a9]"
                >
                  <FontAwesomeIcon className="mb-[2px]" icon={faUser} />
                  <p className="ml-[5px]">
                    <FormattedMessage {...messages.title} />
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit(data => onSubmit(data))} className="mt-6">
                <div className="mb-4">
                  <InputWithFormatMessage
                    id="email"
                    type="text"
                    name="email"
                    className="border-[1px] rounded border-solid border-[#eaeaea] block w-full px-4 py-2 mt-2 text-purple-700 bg-white border outline-none"
                    message={messages.placeholder.email}
                    validate={register('email', {
                      ...required(messages.message.required),
                      ...emailValidation(messages.message.email),
                    })}
                  />
                  <ErrorMessage name={email} />
                </div>
                <div className="mb-2">
                  <div className="flex border-[1px] border-solid border-[#eaeaea] bg-white border relative mt-2">
                    <InputWithFormatMessage
                      id="password"
                      name="password"
                      type={showPass ? 'text' : 'password'}
                      className="border-[1px] rounded border-solid border-[#eaeaea] block w-full px-4 py-2 text-purple-700 bg-white border outline-none"
                      message={messages.placeholder.password}
                      validate={register('password', required(messages.message.required))}
                    />
                    <div className="flex items-center absolute right-[5px] top-[50%] translate-y-[-50%]">
                      <button type="button" className="px-2 text-[#757575]" onClick={() => setShowPass(!showPass)}>
                        {/* eslint-disable-next-line max-len */}
                        {!showPass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                      </button>
                    </div>
                  </div>
                  <ErrorMessage name={password} />
                </div>
                <a href="#" className="text-xs text-purple-600 hover:underline">
                  <FormattedMessage {...messages.forget_password} />
                </a>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#19c7a9] rounded-md hover:opacity-70 focus:outline-none"
                  >
                    <FormattedMessage {...messages.btn.login} />
                  </button>
                </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-700">
                <FormattedMessage {...messages.not_account} />
                <Link to="/register" className="font-medium text-purple-600 hover:underline">
                  <FormattedMessage {...messages.sign_up} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.prototype = {
  handleOnSubmit: PropTypes.func,
};

export default Login;
