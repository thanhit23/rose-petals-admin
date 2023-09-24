import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import AuthLayout from '../../../layouts/AuthLayout';
import OrderDetailComponent from '../../../components/Orders/Detail';
import {
  getOrderDetail as getOrderDetailAction,
  getOrder as getOrderAction,
  resetOrderDetail as resetOrderDetailAction,
  deleteProductDetail as deleteProductDetailAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../List/reducers';

function OrderDetail({ order, product, getOrder, getOrderDetail, resetOrderDetail, deleteProductDetail }) {
  const { id: idOrder } = useParams();

  useEffect(() => {
    resetOrderDetail();
    getOrderDetail(idOrder);
    getOrder(idOrder);
  }, []);

  const deleteProductOrder = id => deleteProductDetail(idOrder, id);

  return (
    <AuthLayout title="order_detail">
      <OrderDetailComponent order={order} productOrder={product} deleteProductOrder={deleteProductOrder} />
    </AuthLayout>
  );
}

OrderDetail.prototype = {
  detail: PropTypes.object,
  getOrder: PropTypes.func,
  getOrderDetail: PropTypes.func,
  resetOrderDetail: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  getOrder: bindActionCreators(getOrderAction, dispatch),
  getOrderDetail: bindActionCreators(getOrderDetailAction, dispatch),
  resetOrderDetail: bindActionCreators(resetOrderDetailAction, dispatch),
  deleteProductDetail: bindActionCreators(deleteProductDetailAction, dispatch),
});

const mapStateToProps = state => {
  const {
    order: {
      detail: { order, product },
    },
  } = state;
  return {
    order,
    product,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'detailOrder', saga });
const withReducer = injectReducer({ key: 'order', reducer });

export default compose(withSaga, withReducer, withConnect)(OrderDetail);
