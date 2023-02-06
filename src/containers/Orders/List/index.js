import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';

import { Url } from '../../../helpers';
import {
  getOrders as getOrdersAction,
  deleteOrder as deleteOrderAction,
} from './actions';
import AuthLayout from '../../../layouts/AuthLayout';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import injectReducer from '../../../utils/injectReducer';
import reducer from './reducers';
import ListOrderComponent from '../../../components/Orders/List';

function ListOrder({ data, meta, getOrders, deleteOrder }) {
  const [filter, setFilter] = useState({
    page: 1,
    name: '',
    forkUpdate: null,
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getOrders(params);
  }, [filter]);

  const handleGetOrders = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/orders?${query}`);

    setFilter(objectUrl);
  };

  const callback = () => setFilter({ ...filter, forkUpdate: '' });

  const handleDeleteOrder = id => deleteOrder(id, callback);

  return (
    <AuthLayout title="list_order">
      <ListOrderComponent
        meta={meta}
        data={data}
        getOrders={handleGetOrders}
        handleDeleteOrder={handleDeleteOrder}
      />
    </AuthLayout>
  );
}

ListOrder.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  getOrders: propsTypes.func,
  deleteOrder: propsTypes.func,
};

const mapStateToProps = state => {
  const {
    order: {
      list: { data, meta },
    },
  } = state;
  return {
    meta,
    data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: bindActionCreators(deleteOrderAction, dispatch),
    getOrders: bindActionCreators(getOrdersAction, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'order', reducer });
const withSaga = injectSaga({ key: 'order', saga });

export default compose(withReducer, withSaga, withConnect)(ListOrder);
