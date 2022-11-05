import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { find as findLodash } from 'lodash';
import PropTypes from 'prop-types';

import Breadcrumb from '../Breadcrumb';
import messages from './messages';

function EditCategoryComponent({ onSubmit, data }) {
  const { id } = useParams();
  const result = findLodash(data, { id });
  const { name } = result;
  const [categoryEdit, setCategoryEdit] = useState({ name });
  const { name: categoryName } = categoryEdit;
  const handleChangeInput = ({ target: { value } }) => {
    setCategoryEdit({ name: value });
  };
  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/categories', name: 'category' }}
        title="edit_category"
      />
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FormattedMessage {...messages.label_name} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <FormattedMessage {...messages.placeholder_name}>
              {msg => (
                <input
                  className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={categoryName}
                  onChange={handleChangeInput}
                  placeholder={msg}
                />
              )}
            </FormattedMessage>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => onSubmit(id, categoryEdit)}
            >
              <FormattedMessage {...messages.btn_submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditCategoryComponent.prototype = {
  onSubmitForUpdateUser: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = state => {
  const {
    category: {
      data: { data },
    },
  } = state;
  return {
    data,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(EditCategoryComponent);
