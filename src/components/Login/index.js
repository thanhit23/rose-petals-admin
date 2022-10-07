import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import messages from './messages';

class Login extends Component {
  render() {
    return (
      <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            <FormattedMessage {...messages.title} />
          </h1>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email Address"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="button"
            className="py-3 w-64 text-xl text-white bg-[rgb(36,115,225)] rounded-2xl"
          >
            <FormattedMessage {...messages.btn_login} />
          </button>
          <p className="mt-4 text-sm">
            <FormattedMessage {...messages.message_login_account} />
            <Link to="/register">
              <span className="underline  cursor-pointer">
                <FormattedMessage {...messages.sign_up} />
              </span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
