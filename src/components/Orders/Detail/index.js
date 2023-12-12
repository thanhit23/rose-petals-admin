import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FormattedMessage } from 'react-intl';
import cls from 'classnames';
import dayjs from 'dayjs';
import Breadcrumb from '../../Breadcrumb';
import messages from './messages';
import { formatMoney } from '../../../helpers';
import TextareaWithFormatMessage from '../../TextareaWithFormatMessage';
import LabelWithFormatMessage from '../../LabelWithFormatMessage';
import ConfirmModal from '../../ConfirmModal';
import vnPay from '../../../resources/images/vnpay.png';
import paypal from '../../../resources/images/paypal.png';
import cashOnDelivery from '../../../resources/images/cashOnDelivery.jpg';
import { VN_PAY, PAYPAL, CASH_ON_DELIVERY } from './methodPaymentConstants';

function OrderDetailComponent({ order, productOrder, deleteProductOrder }) {
  const statusOrder = ['Cancelled', 'Pending', 'Processing', 'Delivered'];

  const renderClsTextarea = () => {
    return [
      'hover:border-[#111] w-full outline-none appearance-none border border-[#e3e9ef] rounded p-3 text-[14px] leading-tight mt-3',
    ];
  };

  const checkMethodPayment = methodPayment => {
    if (methodPayment === '1') {
      return CASH_ON_DELIVERY;
    }
    if (methodPayment === '2') {
      return VN_PAY;
    }

    return PAYPAL;
  };

  const imgCreditDebit = [
    {
      name: CASH_ON_DELIVERY,
      image: cashOnDelivery,
    },
    {
      name: VN_PAY,
      image: vnPay,
    },
    {
      name: PAYPAL,
      image: paypal,
    },
  ];

  const { status, customerNote, address } = order;

  const renderProduct = () =>
    productOrder.map(({ _id, product: { thumbnail, name }, price, quantity }, i) => (
      <div key={i} className="flex flex-row gap-4 my-6">
        <div className="flex flex-row w-1/2 gap-4">
          <div className="h-[64px] w-[64px]">
            <img className="object-cover w-full h-full rounded" src={thumbnail} alt="" />
          </div>
          <div>
            <h6 className="mb-1 text-sm">{name}</h6>
            <div className="flex place-items-center">
              <p className="whitespace-nowrap text-[#7d879c] text-sm">{price} VND x</p>
              <div className="max-w-[60px] ml-2">
                <div className="min-w-0 ">
                  <input
                    className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                    type="number"
                    defaultValue={quantity}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-1/2 gap-4 place-items-center">
          <p className="text-[#7d879c] text-sm">Product properties: Black, L</p>
          <div>
            <ConfirmModal classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full" callback={() => deleteProductOrder(_id)}>
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </ConfirmModal>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <Breadcrumb title="order_detail" />
      <div className="shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg">
        <div className="p-6">
          <div className="flex flex-row gap-8">
            <p className="m-0 text-sm">
              <span className="text-[#7d879c] normal-case whitespace-normal mr-1">
                <FormattedMessage {...messages.order_id} />:
              </span>
              {productOrder.id}
            </p>
            <p className="m-0 text-sm">
              <span className="text-[#7d879c] normal-case whitespace-normal mr-1">
                <FormattedMessage {...messages.placed_on} />:
              </span>
              {dayjs(productOrder.updatedAt).format('YYYY-MM-DD')}
            </p>
          </div>
          <div className="flex flex-col my-6">
            <label className="mb-2">
              <FormattedMessage {...messages.order_status} />
            </label>
            <div className="relative w-1/2">
              <select
                className="hover:border-[#111] h-12 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-3 text-[14px] leading-tight"
                value={status}
                disabled
              >
                {statusOrder.map((e, i) => (
                  <option key={i} value={i}>
                    {e}
                  </option>
                ))}
              </select>
              <FontAwesomeIcon
                className="absolute text-[#7D879C] right-3 top-[50%] translate-y-[-50%]"
                icon={faChevronDown}
              />
            </div>
          </div>
          {productOrder.length && renderProduct()}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg mt-6">
          <div className="p-6">
            <div>
              <LabelWithFormatMessage
                message={messages.label.shipping_address}
                className="mb-2"
                htmlFor="shipping-address"
              />
              <div className={cls(renderClsTextarea())}>
                <TextareaWithFormatMessage
                  className="w-full outline-none appearance-none border-none text-[14px] leading-tight"
                  id="shipping-address"
                  type="text"
                  name="shipping-address"
                  rows={4}
                  message={messages.placeholder.shipping_address}
                  defaultValue={address}
                />
              </div>
            </div>
            <div className="mt-3">
              <LabelWithFormatMessage message={messages.label.customer_note} className="mb-2" htmlFor="customer-note" />
              <div className={cls(renderClsTextarea())}>
                <TextareaWithFormatMessage
                  className="w-full outline-none appearance-none border-none text-[14px] leading-tight"
                  id="customer-note"
                  type="text"
                  name="customer-note"
                  rows={4}
                  message={messages.placeholder.customer_note}
                  defaultValue={customerNote}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg mt-6">
          <div className="p-6">
            <h6 className="mb-3 text-base">
              <FormattedMessage {...messages.total_summary} />
            </h6>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">
                <FormattedMessage {...messages.subtotal} />:
              </p>
              <h6 className="text-sm">{formatMoney(productOrder.subtotal || 0)} VNĐ</h6>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">
                <FormattedMessage {...messages.shipping_fee} />:
              </p>
              <div className="flex place-items-center">
                <h6 className="mr-1 text-sm">VNĐ</h6>
                <div className="max-w-[60px] ml-2">
                  <h6 className="text-sm">{formatMoney(productOrder.shipingFee || 0)}</h6>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">
                <FormattedMessage {...messages.discount} />
                (%):
              </p>
              <div className="flex place-items-center">
                <div className="max-w-[60px] ml-2">
                  <h6 className="text-sm">{formatMoney(productOrder.discountPercent || 0)}</h6>
                </div>
              </div>
            </div>
            <hr className="my-4 border-[#f3f5f9]" />
            <div className="flex justify-between mb-3">
              <p className="text-[#2b3445] text-sm font-semibold">
                <FormattedMessage {...messages.total} />
              </p>
              <div className="flex">
                <div className="max-w-[60px] mr-2">
                  <h6 className="text-sm">{formatMoney(productOrder.totalPrice)}</h6>
                </div>
                <h6 className="text-sm">VNĐ</h6>
              </div>
            </div>
            <h6 className="text-sm mb-3 text-[#2b3445] font-light">
              <FormattedMessage {...messages.paid_method} />
            </h6>
            <div className="flex flex-row">
              {imgCreditDebit.map(({ name, image }, i) => (
                <div
                  key={i}
                  className={cls(
                    'shadow-[#03004717_0px_1px_3px] bg-white rounded p-1 mr-2 border border-solid',
                    name === checkMethodPayment(productOrder.methodPayment) ? 'border-[#ff0000]' : 'border-transparent',
                  )}
                >
                  <img src={image} alt="" className="w-[60px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between mt-4"> */}
      {/*  <button */}
      {/* eslint-disable-next-line max-len */}
      {/*    className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" */}
      {/*    type="submit" */}
      {/*  > */}
      {/*    <FormattedMessage {...messages.button.submit} /> */}
      {/*  </button> */}
      {/* </div> */}
    </>
  );
}

export default OrderDetailComponent;
