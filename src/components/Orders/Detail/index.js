import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTrash } from '@fortawesome/free-solid-svg-icons';

import { FormattedMessage } from 'react-intl';
import Breadcrumb from '../../Breadcrumb';
import messages from './messages';

function OrderDetailComponent() {
  const statusOrder = ['Cancelled', 'Pending', 'Processing', 'Delivered'];
  return (
    <>
      <Breadcrumb title="order_detail" />
      <div className="shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg">
        <div className="p-6">
          <div className="flex flex-row gap-8">
            <p className="m-0 text-sm">
              <span className="text-[#7d879c] normal-case whitespace-normal mr-1">
                Order ID:
              </span>
              f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8
            </p>
            <p className="m-0 text-sm">
              <span className="text-[#7d879c] normal-case whitespace-normal mr-1">
                Placed on:{' '}
              </span>
              10 Nov, 2022
            </p>
          </div>
          <div className="flex flex-col my-6">
            <label className="mb-2">Order Status</label>
            <div className="relative w-1/2">
              <select className="hover:border-[#111] h-12 w-full outline-none appearance-none border border-[#e3e9ef] rounded py-[16px] px-3 text-[14px] leading-tight">
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
          <div className="flex flex-row gap-4 my-6">
            <div className="flex flex-row gap-4 w-1/2">
              <div className="max-h-[64px] max-w-[64px]">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ea0f30d29f648fe8d34d9ffd26cb3e63"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm mb-1">Budi 2017</h6>
                <div className="flex place-items-center">
                  <p className="whitespace-nowrap text-[#7d879c] text-sm">
                    $226.00 x
                  </p>
                  <div className="max-w-[60px] ml-2">
                    <div className="min-w-0 ">
                      <input
                        className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                        type="number"
                        defaultValue={1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-1/2 place-items-center justify-between">
              <p className="text-[#7d879c] text-sm">
                Product properties: Black, L
              </p>
              <button type="button" className="p-4">
                <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 my-6">
            <div className="flex flex-row gap-4 w-1/2">
              <div className="max-h-[64px] max-w-[64px]">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ea0f30d29f648fe8d34d9ffd26cb3e63"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm mb-1">Budi 2017</h6>
                <div className="flex place-items-center">
                  <p className="whitespace-nowrap text-[#7d879c] text-sm">
                    $226.00 x
                  </p>
                  <div className="max-w-[60px] ml-2">
                    <div className="min-w-0 ">
                      <input
                        className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                        type="number"
                        defaultValue={1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-1/2 place-items-center justify-between">
              <p className="text-[#7d879c] text-sm">
                Product properties: Black, L
              </p>
              <button type="button" className="p-4">
                <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4 my-6">
            <div className="flex flex-row gap-4 w-1/2">
              <div className="max-h-[64px] max-w-[64px]">
                <img
                  className="object-cover h-full w-full rounded"
                  src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ea0f30d29f648fe8d34d9ffd26cb3e63"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-sm mb-1">Budi 2017</h6>
                <div className="flex place-items-center">
                  <p className="whitespace-nowrap text-[#7d879c] text-sm">
                    $226.00 x
                  </p>
                  <div className="max-w-[60px] ml-2">
                    <div className="min-w-0 ">
                      <input
                        className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                        type="number"
                        defaultValue={1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-1/2 place-items-center justify-between">
              <p className="text-[#7d879c] text-sm">
                Product properties: Black, L
              </p>
              <button type="button" className="p-4">
                <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg mt-6">
          <div className="p-6">
            <div>
              <label className="mb-2" htmlFor="name">
                Shipping Address
              </label>
              <textarea
                id="name"
                className="hover:border-[#111] w-full outline-none appearance-none border border-[#e3e9ef] rounded p-1 text-[14px] leading-tight mt-3"
                name="name"
                rows={4}
              />
            </div>
            <div>
              <label className="mb-2" htmlFor="name">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Customer's Note
              </label>
              <textarea
                id="name"
                className="hover:border-[#111] w-full outline-none appearance-none border border-[#e3e9ef] rounded p-1 text-[14px] leading-tight mt-3"
                name="name"
                rows={4}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 shadow-[#03004717_0px_1px_3px] bg-white rounded mt-4 rounded-lg mt-6">
          <div className="p-6">
            <h6 className="text-base mb-3">Total Summary</h6>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">Subtotal:</p>
              <h6 className="text-sm">$350.00</h6>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">Shipping fee:</p>
              <div className="flex place-items-center">
                <h6 className="text-sm mr-1">$</h6>
                <div className="max-w-[60px] ml-2">
                  <div className="min-w-0">
                    <input
                      className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                      type="number"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-[#7d879c] text-sm">Discount(%):</p>
              <div className="flex place-items-center">
                <h6 className="text-sm mr-1">$</h6>
                <div className="max-w-[60px] ml-2">
                  <div className="min-w-0">
                    <input
                      className="hover:border-[#111] h-8 w-full outline-none appearance-none border border-[#e3e9ef] rounded p-2 text-[14px] leading-tight"
                      type="number"
                      defaultValue={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4 border-[#f3f5f9]" />
            <div className="flex justify-between mb-3">
              <p className="text-[#2b3445] text-sm font-semibold">Total</p>
              <h6 className="text-sm">$350.00</h6>
            </div>
            <h6 className="text-sm mb-3 text-[#2b3445] font-light">
              Paid by Credit/Debit Card
            </h6>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className="bg-[#007bff] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <FormattedMessage {...messages.button.submit} />
        </button>
      </div>
    </>
  );
}

export default OrderDetailComponent;
