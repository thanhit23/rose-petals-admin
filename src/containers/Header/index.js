import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import propTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

import Search from './Search';
import { filterProduct } from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import reducer from './reducers';
import saga from './saga';

function withParams(Components) {
  // eslint-disable-next-line func-names
  return function (props) {
    return <Components {...props} navigate={useNavigate()} />;
  };
}

class Header extends Component {
  onchange = ({ target: { value } }) => {
    const { onChangeSearch } = this.props;
    onChangeSearch(value);
  };

  handleLogout = () => {
    const { navigate } = this.props;
    navigate('/login');
  };

  render() {
    return (
      <header>
        <nav className="bg-[#6366f1] navbar navbar-expand-lg shadow-md py-2 relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  />
                </svg>
              </button>
            </div>
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row items-center">
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    style={({ isActive }) => ({
                      color: isActive && 'rgb(226,232,240)',
                    })}
                    to="/home"
                    className="nav-link block pr-2 lg:px-2 py-2 text-[rgb(255,255,255)] hover:text-[rgb(226,232,240)] focus:text-[rgb(148,163,184)] transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                  >
                    <FontAwesomeIcon className="mr-1" icon={faBars} />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* eslint-disable-next-line max-len */}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <div
                    onClick={this.handleLogout}
                    className="nav-link block pr-2 lg:px-2 py-2 text-[rgb(255,255,255)] hover:text-[rgb(226,232,240)] focus:text-[rgb(148,163,184)] transition duration-150 ease-in-out"
                  >
                    LogOut
                  </div>
                </li>
                <li>
                  <Search handleChane={this.onchange} />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onChangeSearch: propTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSearch: bindActionCreators(filterProduct, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default withParams(compose(withReducer, withSaga, withConnect)(Header));
