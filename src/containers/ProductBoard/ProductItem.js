import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducers';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { editProduct, openModal } from '../HomePage/actions';
import { deleteProduct } from './actions';

class ProductItem extends Component {
  updateProduct = (data, title) => {
    this.props.onOpenModal(title);
    this.props.onEditProduct(data);
  };

  deleteProduct = id => {
    // eslint-disable-next-line no-restricted-globals,no-alert
    const resultCon = confirm('Bạn đã chắc chắn muốn xoá');
    if (resultCon) {
      this.props.onDeleteProduct(id);
    }
  };

  render() {
    const { data } = this.props;
    const { id, name, price } = data;

    return (
      <div className="mt-[5px]">
        <p>{name}</p>
        <p>{price}</p>
        <div className="flex justify-end">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[rgb(37,99,235)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[rgb(29,78,216)] hover:shadow-lg focus:bg-[rgb(29,78,216)] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-btn="Update Product"
            onClick={() => this.updateProduct(data, 'Update Product')}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            type="button"
            className="ml-[10px] inline-block px-6 py-2.5 bg-[rgb(220,38,38)] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => this.deleteProduct(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  data: propTypes.shape({
    name: propTypes.string,
    price: propTypes.number,
  }),
  onOpenModal: propTypes.func,
  onEditProduct: propTypes.func,
  onDeleteProduct: propTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenModal: bindActionCreators(openModal, dispatch),
    onEditProduct: bindActionCreators(editProduct, dispatch),
    onDeleteProduct: bindActionCreators(deleteProduct, dispatch),
  };
};

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'products', reducer });
const withSaga = injectSaga({ key: 'products', saga });

export default compose(withReducer, withSaga, withConnect)(ProductItem);
