import React, { useEffect, useMemo } from 'react';
import { bindActionCreators, compose } from 'redux';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryComponent from '../../components/Category';
import AuthLayout from '../../layouts/AuthLayout';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducers';
import { getCategories, deleteCategory } from './actions';
import injectReducer from '../../utils/injectReducer';

function Category({ getCategory, data: dataCategory, onDeleteCategory }) {
  const navigate = useNavigate();
  const callback = ({ status }) => status && navigate('/admin/users');
  useEffect(() => getCategory(), []);
  const handleDeleteCategory = id => onDeleteCategory(id, callback);
  const element = useMemo(() => {
    if (dataCategory) {
      const { data, meta } = dataCategory;
      return (
        <CategoryComponent
          data={data}
          meta={meta}
          deleteCategory={handleDeleteCategory}
        />
      );
    }
    return false;
  }, [dataCategory]);

  return <AuthLayout title="category" children={element} />;
}

const mapStateToProps = ({ category: { data } }) => ({ data });

const mapDispatchToProps = dispatch => ({
  getCategory: bindActionCreators(getCategories, dispatch),
  onDeleteCategory: bindActionCreators(deleteCategory, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'category', saga });
const withReducer = injectReducer({ key: 'category', reducer });

export default compose(withSaga, withReducer, withConnect)(Category);
