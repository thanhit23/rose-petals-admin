import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import TextareaWithFormatMessage from '../../TextareaWithFormatMessage';
import ErrorMessage from '../../ErrorMessage';
import UploadFileComponent from '../../UploadFile';
import { required } from '../../../utils/validation';
import { BASE_URL } from '../../../service/constants';

function EditProductComponent({ brands, categories, submit, product }) {
  const [file, setFile] = useState('');

  const [images, setImages] = useState([]);

  const { id: productId } = useParams();

  const {
    id,
    slug,
    createdAt,
    updatedAt,
    deletedAt,
    category: categoryId = '',
    brand: brandId = '',
    ...productData
  } = product;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...productData, category: categoryId, brand: brandId },
  });

  const { name, price, images: imagesError, description, category, brand, size } = errors;

  useEffect(() => {
    !isEmpty(product) && reset(productData);
    const { images: imagesDefault = [] } = productData;
    setImages(imagesDefault);
  }, [product]);

  const onSubmit = data => {
    const arrImages = images.map(imgUrl => imgUrl);
    submit(productId, { ...data, images: arrImages }, file);
  };

  const handleUploadImage = ({ target: { files } }) => setFile(files);

  const handleRemoveFile = url => {
    const arrFile = images.filter(imgUrl => imgUrl !== url);
    setImages(arrFile);
  };

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
      <Breadcrumb prevPage={{ path: '/admin/products', name: 'list_product' }} title="edit_product" />
      <div>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        >
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="name"
              type="text"
              validate={register('name', required(messages.message.required))}
            />
            <ErrorMessage name={name} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.price}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="price"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.price}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="number"
              validate={register('price', required(messages.message.required))}
            />
            <ErrorMessage name={price} />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.images}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="images"
              requiredField
            />
            {renderUploadComponent}
            <ErrorMessage name={imagesError} />
            <div className="flex flex-wrap mt-4">
              {images.map((url, i) => (
                <div key={i} className="relative mr-5">
                  <img
                    loading="lazy"
                    className="w-[60px]"
                    decoding="async"
                    src={`${BASE_URL}/file${url}`}
                    alt={`product-${i}`}
                  />
                  <button
                    type="button"
                    className="absolute top-[-15px] right-[-15px] flex w-[35px] h-[35px] bg-[#efefef] items-center justify-center rounded-full"
                    onClick={() => handleRemoveFile(url)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.description}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
              requiredField
            />
            <div className="shadow-md appearance-none py-[16px] px-3 border border-[#e2e8f0] mb-3">
              <TextareaWithFormatMessage
                className="rounded w-full text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                rows={6}
                message={messages.placeholder.description}
                validate={register('description', required(messages.message.required))}
              />
              <ErrorMessage name={description} />
            </div>
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.size}
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="size"
            />
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.small} htmlFor="small" />
              <InputWithFormatMessage type="checkbox" name="size" value="S" validate={register('size')} />
            </div>
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.medium} htmlFor="medium" />
              <InputWithFormatMessage type="checkbox" name="size" value="M" validate={register('size')} />
            </div>
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.large} htmlFor="large" />
              <InputWithFormatMessage type="checkbox" name="size" value="L" validate={register('size')} />
            </div>
            <div className="w-[100px] flex justify-between">
              <LabelWithFormatMessage message={messages.label.sizeXl} htmlFor="large" />
              <InputWithFormatMessage type="checkbox" name="size" value="XL" validate={register('size')} />
            </div>
            <ErrorMessage name={size} />
          </div>
          <div className="mb-6">
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.quantity}
                className="block mb-2 text-sm font-bold text-gray-700"
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
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.brand}
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="brand"
                requiredField
              />
              <select
                id="brand"
                name="brand"
                value={brandId}
                className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
                {...register('brand', required(messages.message.required))}
              >
                <option value="">Select...</option>
                {/* eslint-disable-next-line no-shadow */}
                {brands.map(({ name, id }, index) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              <ErrorMessage name={brand} />
            </div>
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.category}
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="category"
                requiredField
              />
              <select
                id="category"
                name="category"
                value={categoryId}
                className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
                {...register('category', required(messages.message.required))}
              >
                <option value="">Select...</option>
                {/* eslint-disable-next-line no-shadow */}
                {categories.map(({ name, id }, index) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
              <ErrorMessage name={category} />
            </div>
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

EditProductComponent.prototype = {
  submit: PropTypes.func,
  users: PropTypes.array,
  brands: PropTypes.array,
  categories: PropTypes.array,
};

export default EditProductComponent;
