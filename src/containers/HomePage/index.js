import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import ProductBoard from '../ProductBoard';
import ModalAddProduct from './ModalAddProduct';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import saga from './saga';
import { closeModal, openModal } from './actions';
import injectSaga from '../../utils/injectSaga';
import Header from '../Header';
import LoadingIndicator from '../LoadingIndicator';

class HomePage extends Component {
  openModal = ({ target }) => {
    const {
      dataset: { add },
    } = target;
    this.props.onOpenModal(add);
  };

  closeModal = () => {
    this.props.onCloseModal();
  };

  render() {
    const { isModal } = this.props;
    return (
      <>
        <ToastContainer />
        <Header />
        <LoadingIndicator />
        <section>
          <Helmet>
            <title>Home Page</title>
            <meta
              name="description"
              content="A React.js Boilerplate application homepage"
            />
          </Helmet>
          <div className="m-[10px]">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-[rgb(37,99,235)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(29,78,216)] hover:shadow-lg focus:bg-[rgb(29,78,216)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={this.openModal}
              data-add="Add Product"
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Product
            </button>
          </div>
          {isModal && <ModalAddProduct onCloseModal={this.closeModal} />}
          <ProductBoard />
        </section>
      </>
    );
  }
}

HomePage.propTypes = {
  isModal: propTypes.bool,
};

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
