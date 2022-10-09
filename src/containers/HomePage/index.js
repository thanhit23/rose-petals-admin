import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import saga from './saga';
import { closeModal, openModal } from './actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../Header';
import LoadingIndicator from '../LoadingIndicator';

function HomePage() {
  return (
    <>
      <ToastContainer />
      <Header />
      <LoadingIndicator />
      <section className="mt-[78px]">
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <div className="w-60 h-full shadow-md bg-white absolute">
            <div className="pt-4 pb-2 px-6">
              <a href="#">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                      className="rounded-full w-10"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm font-semibold text-blue-600">
                      Jason McCoel
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <ul className="relative px-1">
              <li className="relative">
                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer">
                  <FontAwesomeIcon className="w-3 h-3 mr-3" icon={faGlobe} />
                  <span>Collapsible item 1</span>
                  <FontAwesomeIcon
                    className="w-3 h-3 ml-auto"
                    icon={faChevronDown}
                  />
                </a>
                <ul className="relative accordion-collapse collapse">
                  <li className="relative">
                    <a
                      href="#!"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    >
                      Link 1
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      href="#!"
                      className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    >
                      Link 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="text-center bottom-0 absolute w-full">
              <hr className="m-0" />
              <p className="py-2 text-sm text-gray-700">
                tailwind-elements.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = state => {
  const {
    home: { isModal },
  } = state;
  return {
    isModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseModal: bindActionCreators(closeModal, dispatch),
    onOpenModal: bindActionCreators(openModal, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
