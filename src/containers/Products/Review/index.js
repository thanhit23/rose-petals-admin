import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { Url } from '../../../helpers';
import AuthLayout from '../../../layouts/AuthLayout';
import ProductReviewComponent from '../../../components/Products/Review';
import injectReducer from '../../../utils/injectReducer';
import injectSaga from '../../../utils/injectSaga';
import reducer from '../List/reducers';
import saga from './saga';
import { getProductReview as getProductReviewAction } from './actions';

function ProductsReview({ data, meta, getProductsReview, deleteProduct }) {
  const [filter, setFilter] = useState({
    page: 1,
    name: '',
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getProductsReview(params);
  }, [filter]);

  const handleGetProducts = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/products/reviews?${query}`);

    setFilter(objectUrl);
  };

  const handleDeleteProduct = id => deleteProduct(id);

  return (
    <AuthLayout title="list_product">
      <ProductReviewComponent
        data={data}
        meta={meta}
        getProductReview={handleGetProducts}
        handleDeleteProduct={handleDeleteProduct}
      />
    </AuthLayout>
  );
}

const mapStateToProps = state => {
  const {
    product: {
      review: { data, meta },
    },
  } = state;
  return {
    meta,
    data,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductsReview: bindActionCreators(getProductReviewAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withSaga, withReducer, withConnect)(ProductsReview);
