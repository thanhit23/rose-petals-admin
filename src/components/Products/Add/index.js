import { useState, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import cls from 'classnames';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import ErrorMessage from '../../ErrorMessage';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import UploadFileComponent from '../../UploadFile';
import TextareaWithFormatMessage from '../../TextareaWithFormatMessage';
import { required } from '../../../utils/validation';

function AddProductComponent({ onSubmit, listCategory = [], listBrand = [] }) {
  const [file, setFile] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [label, setLabel] = useState({
    name: false,
  });

  const onFocusAndBlurInput = ({ name, value }, valueForFocusBlur) => {
    if (!value) setLabel({ ...label, [name]: valueForFocusBlur });
  };

  const { description, name, price, category, brand, images } = errors;

  // eslint-disable-next-line no-shadow
  const renderClsInput = (label, name) => {
    return [
      'h-[54px] outline-none appearance-none border border-[#e3e9ef] rounded w-full py-[16px] px-3 text-[14px] leading-tight',
      { 'label-input-focus': label.name && !name },
      { 'hover:border-[#111]': !label.name && !name },
      { 'border-[#d1373a]': name },
    ];
  };

  // eslint-disable-next-line no-shadow
  const renderClsLabel = (label, name) => {
    return [
      'block text-[14px] text-black absolute label-input leading-[14px]',
      { 'label__input label-input-focus': label.name },
      { 'bg-white': !label.name },
      { 'text-[#4d97fd]': label.name && !name },
      { 'text-[#d1373a]': name },
    ];
  };

  const handleUploadImage = ({ target: { files } }) => setFile(files);

  const handleOnSubmit = data => onSubmit(data, file);

  const renderUploadComponent = useMemo(
    () => (
      <UploadFileComponent
        messages={messages.placeholder.images}
        validate={register('images', required(messages.message.required))}
        handleUploadImage={handleUploadImage}
      />
    ),
    [],
  );

  return (
    <>
      <Breadcrumb title="add_product" />
      <div>
        <form
          onSubmit={handleSubmit(data => {
            handleOnSubmit(data);
          })}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <div className="relative wrapper-input">
              <LabelWithFormatMessage
                message={messages.label.name}
                className={cls(renderClsLabel(label, name))}
                htmlFor="name"
                requiredField
              />
              <InputWithFormatMessage
                className={cls(renderClsInput(label, name))}
                id="name"
                type="text"
                name="name"
                onFocus={({ target }) => onFocusAndBlurInput(target, true)}
                onBlur={({ target }) => onFocusAndBlurInput(target, false)}
                message={messages.placeholder.name}
                validate={register('name', required(messages.message.required))}
              />
            </div>
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
              message={messages.label.images}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
              requiredField
            />
            {renderUploadComponent}
            <ErrorMessage name={images} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.description}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
              requiredField
            />
            <div className="shadow-md appearance-none py-[16px] px-3 border border-[#e2e8f0] mb-3">
              <TextareaWithFormatMessage
                className="rounded w-full text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                rows={6}
                message={messages.placeholder.description}
                validate={register(
                  'description',
                  required(messages.message.required),
                )}
              />
            </div>
            <ErrorMessage name={description} />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.category}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
                requiredField
              />
              <select
                id="category"
                name="category"
                className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
                {...register('category', required(messages.message.required))}
              >
                <option value="">Select...</option>
                {listCategory.map(({ name: nameCategory, id }, index) => (
                  <option key={index} value={id}>
                    {nameCategory}
                  </option>
                ))}
              </select>
              <ErrorMessage name={category} />
            </div>
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.brand}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
                requiredField
              />
              <select
                id="category"
                name="category"
                className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
                {...register('brand', required(messages.message.required))}
              >
                <option value="">Select...</option>
                {listBrand.map(({ name: nameBrand, id }, index) => (
                  <option key={index} value={id}>
                    {nameBrand}
                  </option>
                ))}
              </select>
              <ErrorMessage name={brand} />
            </div>
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
  listBrand: PropTypes.array,
  listCategory: PropTypes.array,
};

export default AddProductComponent;
