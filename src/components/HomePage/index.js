import React, { useMemo } from 'react';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';
import Table from '../Table';
import { formatMoney, Url } from '../../helpers';
import messages from '../Users/List/messages';
import Card from './Card';

function HomePageComponent({ analytics, auth }) {
  const meta = {
    limit: 10,
    page: 1,
    totalPages: 3,
    totalResults: 21,
  };

  const data = [
    {
      dob: null,
      email: 'vantthpd06858@fpt.edu.vn',
      gender: 1,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Tuong Thi Hong Van',
      phoneNumber: '0123456789',
      role: 'user',
    },
    {
      dob: null,
      email: 'developer.vanhuy@gmail.com',
      gender: 2,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Nguyen Van Huy',
      phoneNumber: '0398860291',
      role: 'user',
    },
    {
      dob: null,
      email: 'thanhit23@gmail.com',
      gender: 2,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Nguyen Duy Thanh',
      phoneNumber: '0969067361',
      role: 'user',
    },
  ];

  const columns = useMemo(() => [
    {
      Header: 'Stt',
      accessor: 'stt',
      Cell: props => {
        const {
          cell: {
            row: { index },
          },
        } = props;
        const { page } = Url.getQueryString();
        if (+page > 1) return +(+page - 1 + index.toString()) + 1;
        return index + 1;
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: props => {
        const {
          cell: {
            row: {
              values: { gender },
            },
          },
        } = props;
        if (gender === 1) {
          return <FormattedMessage {...messages.gender_female} />;
        }
        return <FormattedMessage {...messages.gender_male} />;
      },
    },
  ]);

  const columns2 = useMemo(() => [
    {
      Header: 'Stt',
      accessor: 'stt',
      Cell: props => {
        const {
          cell: {
            row: { index },
          },
        } = props;
        const { page } = Url.getQueryString();
        if (+page > 1) return +(+page - 1 + index.toString()) + 1;
        return index + 1;
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
    },
  ]);

  return (
    <div className="px-8 mt-[80px]">
      <div className="py-8">
        <div className="grid grid-cols-12 gap-4">
          <div
            className="md:col-span-6 col-span-12 p-6 bg-white shadow-[0px_1px_3px_#03004717] relative rounded-lg"
            id="123123"
          >
            <h5 className="mb-1 mt-0 text-base text-[#4E97FD]">Good Morning, {auth.name}</h5>
            <p className="my-0 text-sm text-[#7D879C]">Here’s what happening with your store today!</p>
            <h3 className="mt-[24px] mb-0 text-xl  text-[#2B3445] font-semibold">
              {`${formatMoney(analytics?.amountCurrentDate || 0)} VND`}
            </h3>
            <p className="my-0 text-sm text-[#7D879C]">Today’s total sales</p>
            <div className="absolute bottom-0 right-[24px]">
              <img
                className="w-[140px] md:w-full"
                src="https://bazar-react.vercel.app/assets/images/illustrations/dashboard/welcome.svg"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-12 gap-4 md:col-span-6">
            <Card
              title="Order"
              currentQuantity={analytics?.orderMonth || 0}
              quantityIncreased={analytics?.orderTotal || 0}
              iconCaret={faCaretUp}
              numberPercent={((analytics?.orderMonth || 0) / (analytics?.orderTotal || 0)) * 100}
              colorPercent="#4E97FD"
            />
            <Card
              title="Sold Items"
              currentQuantity={analytics?.soldMonth || 0}
              quantityIncreased={analytics?.soldTotal || 0}
              iconCaret={faCaretUp}
              numberPercent={((analytics?.soldMonth || 0) / (analytics?.soldTotal || 0)) * 100}
              colorPercent="#4E97FD"
            />
            <Card
              title="Total Order"
              currentQuantity={`${formatMoney(analytics?.amountMonth || 0)} VND`}
              quantityIncreased={`${formatMoney(analytics?.amountTotal || 0)} VND`}
              iconCaret={faCaretUp}
              numberPercent={((analytics?.amountMonth || 0) / (analytics?.amountTotal || 0)) * 100}
              colorPercent="#4E97FD"
            />
            <Card
              title="Total Shipping Cost"
              currentQuantity={`${formatMoney(analytics?.shippingMonth || 0)} VND`}
              quantityIncreased={`${formatMoney(analytics?.shippingTotal || 0)} VND`}
              iconCaret={faCaretUp}
              numberPercent={((analytics?.shippingMonth || 0) / (analytics?.shippingTotal || 0)) * 100}
              colorPercent="#4E97FD"
            />
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-4">
            <div className="md:col-span-8 col-span-12 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg overflow-auto">
              <div className="flex items-center justify-between px-6 py-5 text-sm">
                <h5 className="text-base font-semibold">Recent Purchases</h5>
                <Link
                  to="/admin/orders"
                  className="py-1 px-[6px] text-[#4E97FD] border border-[#4e97fd80] rounded-lg hover:bg-[#4e97fd0a] hover:border-[#4E97FD]"
                  type="button"
                >
                  All Orders
                </Link>
              </div>
              <Table meta={meta} col={columns} data={data} />
            </div>
            <div className="md:col-span-4 col-span-12 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg overflow-auto">
              <div className="flex items-center justify-between px-6 py-5 text-sm">
                <h5 className="text-base font-semibold">Stock Out Products</h5>
                <Link
                  to="/admin/products"
                  className="py-1 px-[6px] text-[#4E97FD] border border-[#4e97fd80] rounded-lg hover:bg-[#4e97fd0a] hover:border-[#4E97FD]"
                  type="button"
                >
                  All Products
                </Link>
              </div>
              <Table meta={meta} col={columns2} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageComponent;
