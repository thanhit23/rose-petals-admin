import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../../ErrorMessage';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import { required } from '../../../utils/validation';

function AddProductComponent({ onSubmit, dataCategory }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(dataCategory, 'category');

  const { description, images, name, price, category } = errors;

  return (
    <>
      <Breadcrumb title="add_product" />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              message={messages.placeholder.name}
              validate={register('name', required(messages.message.required))}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.price}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              message={messages.placeholder.price}
              validate={register('price', required(messages.message.required))}
            />
            <ErrorMessage name={price} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.description}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              message={messages.placeholder.description}
              validate={register(
                'description',
                required(messages.message.required),
              )}
            />
            <ErrorMessage name={description} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.images}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="images"
              type="text"
              message={messages.placeholder.images}
              validate={register('images', required(messages.message.required))}
            />
            <ErrorMessage name={images} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.category}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
              requiredField
            />
            <InputWithFormatMessage
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              message={messages.placeholder.category}
              validate={register(
                'category',
                required(messages.message.required),
              )}
            />
            <ErrorMessage name={category} />
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

AddProductComponent.prototype = {
  onSubmit: PropTypes.func,
};

export default AddProductComponent;
