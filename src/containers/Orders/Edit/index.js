import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useEffect } from 'react';
import AuthLayout from '../../../layouts/AuthLayout';
import EditOrderComponent from '../../../components/Orders/Edit';
import {
  updateOrder as updateOrderAction,
  getOrder as getOrderAction,
  resetOrderEdit as resetOrderEditAction,
} from './actions';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../../utils/injectReducer';
import reducer from '../List/reducers';

function EditOrder({ updateOrder, edit: editOrder, getOrder, resetData }) {
  const navigate = useNavigate();

  const callback = () => navigate('/admin/orders');

  const handleUpdateOrder = (id, data) => updateOrder(id, data, callback);

  const { id } = useParams();

  useEffect(() => {
    resetData();
    getOrder(id, callback);
  }, []);

  return (
    <AuthLayout title="edit_order">
      <EditOrderComponent order={editOrder} submit={handleUpdateOrder} />
    </AuthLayout>
  );
}

EditOrder.prototype = {
  edit: PropTypes.array,
  getOrder: PropTypes.func,
  resetData: PropTypes.func,
  updateOrder: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  updateOrder: bindActionCreators(updateOrderAction, dispatch),
  getOrder: bindActionCreators(getOrderAction, dispatch),
  resetData: bindActionCreators(resetOrderEditAction, dispatch),
});

const mapStateToProps = state => {
  const {
    order: { edit },
  } = state;
  return {
    edit,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'editOrder', saga });
const withReducer = injectReducer({ key: 'order', reducer });

export default compose(withSaga, withReducer, withConnect)(EditOrder);
