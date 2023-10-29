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

  const renderClsInput = (labelInput, nameInput) => {
    return [
      'h-[54px] outline-none appearance-none border border-[#e3e9ef] rounded w-full py-[16px] px-3 text-[14px] leading-tight',
      { 'label-input-focus': labelInput.name && !nameInput },
      { 'hover:border-[#111]': !labelInput.name && !nameInput },
      { 'border-[#d1373a]': nameInput },
    ];
  };

  const renderClsLabel = (labelInput, nameInput) => {
    return [
      'block text-[14px] text-black absolute label-input leading-[14px]',
      { 'label__input label-input-focus': labelInput.name },
      { 'bg-white': !labelInput.name },
      { 'text-[#4d97fd]': labelInput.name && !nameInput },
      { 'text-[#d1373a]': labelInput },
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
                className={cls(renderClsLabel(label, errors.name))}
                htmlFor="name"
                requiredField
              />
              <InputWithFormatMessage
                className={cls(renderClsInput(label, errors.name))}
                id="name"
                type="text"
                name="name"
                onFocus={({ target }) => onFocusAndBlurInput(target, true)}
                onBlur={({ target }) => onFocusAndBlurInput(target, false)}
                message={messages.placeholder.name}
                validate={register('name', required(messages.message.required))}
              />
            </div>
            <ErrorMessage name={errors?.name} />
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
            <ErrorMessage name={errors?.price} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.images}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="images"
              requiredField
            />
            {renderUploadComponent}
            <ErrorMessage name={errors?.images} />
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
                validate={register('description', required(messages.message.required))}
              />
            </div>
            <ErrorMessage name={errors?.description} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.size}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="size"
              requiredField
            />
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.small} htmlFor="small" />
              <InputWithFormatMessage
                type="checkbox"
                name="size"
                value="x"
                validate={register('size', required(messages.message.required))}
              />
            </div>
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.medium} htmlFor="medium" />
              <InputWithFormatMessage
                type="checkbox"
                name="size"
                value="m"
                validate={register('size', required(messages.message.required))}
              />
            </div>
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.large} htmlFor="large" />
              <InputWithFormatMessage
                type="checkbox"
                name="size"
                value="l"
                validate={register('size', required(messages.message.required))}
              />
            </div>
            <ErrorMessage name={errors?.size} />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.rating}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="rating"
                requiredField
              />
              <InputWithFormatMessage
                className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="rating"
                type="number"
                message={messages.placeholder.rating}
                validate={register('rating', required(messages.message.required))}
              />
              <ErrorMessage name={errors?.rating} />
            </div>
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.quantity}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quantity"
                requiredField
              />
              <InputWithFormatMessage
                className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                type="number"
                message={messages.placeholder.quantity}
                validate={register('quantity', required(messages.message.required))}
              />
              <ErrorMessage name={errors?.quantity} />
            </div>
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
              <ErrorMessage name={errors?.category} />
            </div>
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.brand}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brand"
                requiredField
              />
              <select
                id="brand"
                name="brand"
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
              <ErrorMessage name={errors?.brand} />
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
