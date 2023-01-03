import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import { ARRAY_STATUS } from '../List/constants';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import InputWithFormatMessage from '../../InputWithFormatMessage';

function EditOrderComponent({ submit, order }) {
  const { id } = useParams();

  const [orderEdit, setOrderEdit] = useState(order);

  useEffect(() => setOrderEdit(order), [order]);

  const { address = '', amount = '', quantity = '', status = '' } = orderEdit;

  const onSubmit = () => {
    // eslint-disable-next-line no-shadow
    const { address, amount, quantity, status } = orderEdit;
    submit(id, { address, amount, quantity, status });
  };

  const changeValueInput = ({ target }) => {
    // eslint-disable-next-line no-shadow,prefer-const
    let { name, value } = target;
    if (name === 'status') {
      value = +value;
    }
    setOrderEdit({ ...orderEdit, [name]: value });
  };

  return (
    <>
      <Breadcrumb
        prevPage={{ path: '/admin/users', name: 'list_order' }}
        title="edit_order"
      />
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.address}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.address}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              value={address}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.amount}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.amount}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              name="amount"
              type="number"
              value={amount}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.quantity}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="quantity"
              requiredField
            />
            <InputWithFormatMessage
              message={messages.placeholder.quantity}
              className="h-[54px] shadow-md appearance-none border border-[#e2e8f0] rounded w-full py-[16px] px-3 text-[14px] text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              name="quantity"
              type="number"
              value={quantity}
              onChange={changeValueInput}
            />
          </div>
          <div className="mb-6">
            <LabelWithFormatMessage
              message={messages.label.status}
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
              requiredField
            />
            <select
              id="status"
              name="status"
              className="h-12 pl-2 shadow-md border border-[#e2e8f0] rounded text-[14px] text-gray-700 mb-3"
              defaultValue={status}
            >
              <option value="">Select...</option>
              {ARRAY_STATUS.map((value, index) => (
                <option key={index} value={index}>
                  <FormattedMessage {...messages.status[value]} />
                </option>
              ))}
            </select>
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

EditOrderComponent.prototype = {
  submit: PropTypes.func,
  order: PropTypes.array,
};

export default EditOrderComponent;
