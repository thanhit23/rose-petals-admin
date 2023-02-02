import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';

function EditCategoryComponent({ onSubmit, data }) {
  const { id } = useParams();

  const [categoryEdit, setCategoryEdit] = useState(data);

  const { name: categoryName } = categoryEdit;

  const handleChangeInput = ({ target: { value } }) => {
    setCategoryEdit({ name: value });
  };

  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/categories', name: 'list_category' }}
        title="edit_category"
      />
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block text-gray-700 text-sm font-bold mb-2"
              message={messages.label.name}
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={categoryName}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => onSubmit(id, categoryEdit)}
            >
              <FormattedMessage {...messages.btn.submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

EditCategoryComponent.prototype = {
  onSubmit: PropTypes.func,
  data: PropTypes.object,
};

export default EditCategoryComponent;
