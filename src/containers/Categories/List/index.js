import React, { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryComponent from '../../../components/Categories/List';
import AuthLayout from '../../../layouts/AuthLayout';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';
import reducer from './reducers';
import {
  getCategories,
  deleteCategory as deleteCategoryAction,
} from './actions';
import injectReducer from '../../../utils/injectReducer';

function ListCategory({ getCategory, data, meta, deleteCategory }) {
  useEffect(() => getCategory(), []);
  const redirect = useNavigate();
  const navigate = () => redirect('/admin/categories');
  const handleDeleteCategory = id => deleteCategory(id, navigate);
  const element = useMemo(
    () => (
      <CategoryComponent
        data={data}
        meta={meta}
        deleteCategory={handleDeleteCategory}
      />
    ),
    [data],
  );

  return <AuthLayout title="category" children={element} />;
}

ListCategory.prototype = {
  data: PropTypes.array,
  meta: PropTypes.object,
  deleteCategory: PropTypes.func,
  getCategory: PropTypes.func,
};

const mapStateToProps = ({
  category: {
    list: { data, meta },
  },
}) => ({
  data,
  meta,
});

const mapDispatchToProps = dispatch => ({
  getCategory: bindActionCreators(getCategories, dispatch),
  deleteCategory: bindActionCreators(deleteCategoryAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'category', saga });
const withReducer = injectReducer({ key: 'category', reducer });

export default compose(withSaga, withReducer, withConnect)(ListCategory);
