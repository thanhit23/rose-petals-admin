import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';
import TextareaWithFormatMessage from '../../TextareaWithFormatMessage';

function EditProductComponent({ brands, categories, submit, product }) {
  const { id } = useParams();

  const [productEdit, setProductEdit] = useState(product);

  useEffect(() => setProductEdit(product), [product]);

  const {
    price = '',
    name = '',
    description = '',
    brand = '',
    category = '',
  } = productEdit;

  const onSubmit = () => {
    // eslint-disable-next-line no-shadow
    const { price, description, name, category, brand } = productEdit;
    submit(id, { price, description, name, category, brand });
  };

  const changeValueInput = ({ target }) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = target;
    setProductEdit({ ...productEdit, [name]: value });
  };

  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/products', name: 'list_product' }}
        title="edit_product"
      />
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.name}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.name}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="name"
              type="text"
              value={name}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.description}
              className="block text-gray-700 text-sm font-bold mb-2"
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
                value={description}
                onChange={changeValueInput}
              />
            </div>
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.price}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.price}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="number"
              value={price}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4">
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
                defaultValue={brand}
              >
                <option value="">Select...</option>
                {/* eslint-disable-next-line no-shadow */}
                {brands.map(({ name, id }, index) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <LabelWithFormatMessage
                message={messages.label.price}
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
                requiredField
              />
              <select
                id="category"
                name="category"
                className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
                defaultValue={category}
              >
                <option value="">Select...</option>
                {/* eslint-disable-next-line no-shadow */}
                {categories.map(({ name, id }, index) => (
                  <option key={index} value={id}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
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
