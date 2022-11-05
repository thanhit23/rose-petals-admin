import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Breadcrumb from '../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../ErrorMessage';

function AddCategoryComponent({ onSubmit }) {
  const intl = useIntl();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { name } = errors;
  const ruleRequired = {
    required: {
      value: true,
      message: <FormattedMessage {...messages.message_error_required} />,
    },
  };
  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/categories', name: 'category' }}
        title="add_category"
      />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              <FormattedMessage {...messages.label_name} />
              <span className="text-[#d1373a] text-base">*</span>
            </label>
            <input
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder={intl.formatMessage(messages.placeholder_name)}
              {...register('name', ruleRequired)}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <FormattedMessage {...messages.btn_submit} />
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
