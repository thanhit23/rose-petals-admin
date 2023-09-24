import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../../ErrorMessage';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import { required } from '../../../utils/validation';

function AddCategoryComponent({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { name } = errors;

  return (
    <>
      <Breadcrumb prevPage={{ path: '/admin/categories', name: 'list_category' }} title="add_category" />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              className="block text-gray-700 text-sm font-bold mb-2"
              message={messages.label.name}
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              message={messages.placeholder.name}
              validate={register('name', required(messages.message.required))}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FormattedMessage {...messages.btn.submit} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

AddCategoryComponent.prototype = {
  onSubmitAddUser: PropTypes.func,
};

export default AddCategoryComponent;
