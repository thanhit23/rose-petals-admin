import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import messages from './messages';
import '../../css/login.css';

function Login() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-start-4 col-span-3 min-h-screen flex flex-col">
          <div className="w-full box-show-login z-[1] p-6 m-auto bg-[rgb(255,128,132)] rounded-md shadow-md lg:max-w-xl">
            <div>
              <img
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-end-10 col-span-3 relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
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
                <input
                  type="email"
                  className="border-[1px] border-solid border-[#eaeaea] block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-[20px] focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder={
                    <FormattedMessage {...messages.placeholder_email} />
                  }
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="border-[1px] border-solid border-[#eaeaea] block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-[20px] focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder={
                    <FormattedMessage {...messages.placeholder_password} />
                  }
                />
              </div>
              <a href="#" className="text-xs text-purple-600 hover:underline">
                <FormattedMessage {...messages.forget_password} />
              </a>
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#19c7a9] rounded-md hover:opacity-70 focus:outline-none"
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
  );
}

export default Login;
