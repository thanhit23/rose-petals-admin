import React, { useEffect, useMemo, useState } from 'react';
import { bindActionCreators, compose } from 'redux';
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
import { Url } from '../../../helpers';
import injectReducer from '../../../utils/injectReducer';

function ListCategory({ getCategory, data, meta, deleteCategory }) {
  const [filter, setFilter] = useState({
    page: 1,
    name: '',
    forkUpdate: null,
  });

  useEffect(() => {
    const params = Url.getQueryString();

    if (params !== filter) getCategory(params);
  }, [filter]);

  const handleGetCategories = option => {
    const objectUrl = {
      ...filter,
      ...option,
    };

    const query = Url.objectToQueryString(objectUrl);

    window.history.pushState('', '', `/admin/categories?${query}`);

    setFilter(objectUrl);
  };

  const callback = () => setFilter({ ...filter, forkUpdate: '' });

  const handleDeleteCategory = id => deleteCategory(id, callback);

  const element = useMemo(
    () => (
      <CategoryComponent
        data={data}
        meta={meta}
        getCategory={handleGetCategories}
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
  getCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
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
