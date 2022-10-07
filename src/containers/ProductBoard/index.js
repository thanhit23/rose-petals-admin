import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import ProductItem from './ProductItem';
import reducer from './reducers';
import saga from './saga';
import * as productActions from './actions';

class ProductBoard extends Component {
  componentDidMount() {
    const { productAction } = this.props;
    const { fetchListProduct } = productAction;
    fetchListProduct();
  }

  render() {
    const { listProduct } = this.props;
    const productElement = listProduct.map((i, k) => {
      return <ProductItem key={k} data={i} />;
    });

    return (
      <div className="w-[1200px] m-auto">
        <div className="text-center">
          <h2>All Products</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">{productElement}</div>
      </div>
    );
  }
}

ProductBoard.propTypes = {
  productAction: propTypes.shape({
    fetchListProduct: propTypes.func,
  }),
};

const mapStateToProps = state => {
  const {
    products: { listProduct },
  } = state;
  return {
    listProduct,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productAction: bindActionCreators(productActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'products', reducer });
const withSaga = injectSaga({ key: 'products', saga });

export default compose(withReducer, withSaga, withConnect)(ProductBoard);
