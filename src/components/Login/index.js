/* eslint-disable react/jsx-curly-newline */
import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import messages from './messages';
import '../../css/login.css';

function Login({ handleSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const btnSubmit = useCallback(e => {
    if (e) e.focus();
  }, []);
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-start-3 col-span-2 col-end-11">
          <div className="flex flex-row p-5 bg-white rounded-md shadow-md">
            <div className="w-7/12 z-[1] m-4 lg:max-w-xl">
              <div className="m-auto lg:max-w-xl">
                <img
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
                  alt="mobile-login-concept-illustration_114360-135"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="w-5/12 p-6 m-auto lg:max-w-xl">
              <div className="flex ">
                <div className="flex align-center text-[18px] px-[10px] py-[8px] border-b-2 border-solid border-[#19c7a9] text-[#19c7a9]">
                  <FontAwesomeIcon className="mb-[2px]" icon={faUser} />
                  <p className="ml-[5px]">
                    <FormattedMessage {...messages.title} />
                  </p>
                </div>
              </div>
              <form className="mt-6">
                <div className="mb-4">
                  <FormattedMessage {...messages.placeholder_email}>
                    {msg => (
                      <input
                        type="email"
                        className="border-[1px] border-solid border-[#eaeaea] block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-[20px] focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder={msg}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <div className="mb-2">
                  <FormattedMessage {...messages.placeholder_password}>
                    {msg => (
                      <input
                        type="password"
                        className="border-[1px] border-solid border-[#eaeaea] block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-[20px] focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder={msg}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    )}
                  </FormattedMessage>
                </div>
                <a href="#" className="text-xs text-purple-600 hover:underline">
                  <FormattedMessage {...messages.forget_password} />
                </a>
                <div className="mt-6">
                  <button
                    ref={btnSubmit}
                    type="button"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#19c7a9] rounded-md hover:opacity-70 focus:outline-none"
                    onClick={() => handleSubmit({ email, password })}
                    onKeyDown={({ keyCode }) =>
                      keyCode === 13 && handleSubmit({ email, password })
                    }
                  >
                    <FormattedMessage {...messages.btn_login} />
                  </button>
                </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-700">
                <FormattedMessage {...messages.not_account} />
                <Link
                  to="/register"
                  className="font-medium text-purple-600 hover:underline"
                >
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
  onSubmit: PropTypes.func,
};

export default Login;
