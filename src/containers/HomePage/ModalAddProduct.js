import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { FORM_NAME } from './constants';
import { renderField, validate, warn } from '../../utils/validation';
import { addProduct } from './actions';
import { updateProduct } from '../ProductBoard/actions';

class ModalAddProduct extends Component {
  closeModal = ({
    target: {
      dataset: { modal },
    },
  }) => {
    if (modal === 'close-modal') {
      this.props.onCloseModal();
    }
  };

  addProductForm = data => {
    const { price, name } = data;
    this.props.onAddProduct({
      price: Number(price),
      name,
    });
  };

  updateProductForm = data => {
    console.log(data, 'data');
    this.props.onUpdateProduct(data);
  };

  render() {
    const { title, handleSubmit, invalid, productEditing: edit } = this.props;
    const addEditProduct = edit ? this.updateProductForm : this.addProductForm;
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="bg-[rgba(0,0,0,.4)] flex justify-center items-center modal fade fixed top-0 left-0 block w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="Modal"
        onClick={this.closeModal}
        data-modal="close-modal"
      >
        <div className="modal-dialog relative w-[500px] pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                {title}
              </h5>
              <button
                type="button"
                className="btn-close flex justify-center bg-[rgb(225,29,72)] box-content w-4 h-4 p-2 text-white border-none rounded-[2px] hover:opacity-75 hover:no-underline"
                data-modal="close-modal"
                onClick={this.closeModal}
              >
                <FontAwesomeIcon data-modal="close-modal" icon={faXmark} />
              </button>
            </div>
            <form onSubmit={handleSubmit(addEditProduct)}>
              <div className="modal-body relative p-4">
                <Field
                  component={renderField}
                  name="name"
                  type="text"
                  label="Name Product"
                />
                <Field
                  component={renderField}
                  name="price"
                  type="text"
                  label="Price Product"
                />
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-gray-200 rounded-b-md">
                {/* eslint-disable-next-line react/button-has-type */}
                <button
                  type="reset"
                  className="px-6 py-2.5 bg-[rgb(225,29,72)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(190,18,60)] hover:shadow-lg transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  disabled={invalid}
                  type="submit"
                  className="px-6 py-2.5 bg-[rgb(37,99,235)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(29,78,216)] hover:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ModalAddProduct.propTypes = {
  title: propTypes.string,
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  onAddProduct: propTypes.func,
};

const mapStateToProps = state => {
  const {
    home: { isModal, title, productEditing },
  } = state;
  return {
    productEditing,
    initialValues: productEditing,
    title,
    isModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: bindActionCreators(addProduct, dispatch),
    onUpdateProduct: bindActionCreators(updateProduct, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReduxForm = reduxForm({ form: FORM_NAME, validate, warn });

export default compose(withConnect, withReduxForm)(ModalAddProduct);
