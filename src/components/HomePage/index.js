import React, { useMemo } from 'react';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import CardStatistics from './CardStatistics';
import Table from '../Table';
import { Url } from '../../helpers';
import messages from '../Users/List/messages';
import Card from './Card';

function HomePageComponent() {
  const meta = {
    limit: 10,
    page: 1,
    totalPages: 3,
    totalResults: 21,
  };

  const data = [
    {
      dob: null,
      email: 'tannguyen@example.com',
      gender: 2,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Tan nguyen',
      phoneNumber: '0969067361',
      role: 'user',
    },
    {
      dob: null,
      email: 'tannguyen@example.com',
      gender: 2,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Tan nguyen',
      phoneNumber: '0969067361',
      role: 'user',
    },
    {
      dob: null,
      email: 'tannguyen@example.com',
      gender: 2,
      id: '63665e932617aa000872d7ee',
      isEmailVerified: false,
      lastLoginAt: null,
      location: null,
      name: 'Tan nguyen',
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
            <h5 className="mb-1 mt-0 text-base text-[#4E97FD]">Good Morning, Maruf!</h5>
            <p className="my-0 text-sm text-[#7D879C]">Here’s what happening with your store today!</p>
            <h3 className="mt-[24px] mb-0 text-xl text-[#2B3445] font-semibold">15,350.25</h3>
            <p className="my-0 text-sm text-[#7D879C]">Today’s Visit</p>
            <h3 className="mt-[24px] mb-0 text-xl  text-[#2B3445] font-semibold">$10,360.66</h3>
            <p className="my-0 text-sm text-[#7D879C]">Today’s total sales</p>
            <div className="absolute bottom-0 right-[24px]">
              <img
                className="w-[140px] md:w-full"
                src="https://bazar-react.vercel.app/assets/images/illustrations/dashboard/welcome.svg"
                alt=""
              />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 grid grid-cols-2 gap-4">
            <Card
              title="Order"
              currentQuantity="32,350"
              quantityIncreased="9350"
              iconCaret={faCaretUp}
              numberPercent={25.25}
              colorPercent="#4E97FD"
            />
            <Card
              title="Sold Items"
              currentQuantity="2,360"
              quantityIncreased="1350"
              iconCaret={faCaretDown}
              numberPercent={2.65}
              colorPercent="#E94560"
            />
            <Card
              title="Gross Sale"
              currentQuantity="$12,460.25"
              quantityIncreased="11350"
              iconCaret={faCaretUp}
              numberPercent={10.25}
              colorPercent="#33d067"
            />
            <Card
              title="Total Shipping Cost"
              currentQuantity="$6,240"
              quantityIncreased="4350"
              iconCaret={faCaretDown}
              numberPercent={13.15}
              colorPercent="#E94560"
            />
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <CardStatistics
              title="Weekly Sales"
              currentQuantity="$10,240"
              iconCaret={faCaretUp}
              numberPercent={25.25}
              colorPercent="#4E97FD"
            />
            <CardStatistics
              title="Product Share"
              currentQuantity="39.56%"
              iconCaret={faCaretUp}
              numberPercent={10.25}
              colorPercent="#E94560"
            />
            <CardStatistics
              title="Total Order"
              currentQuantity="$12,260"
              iconCaret={faCaretUp}
              numberPercent={2.65}
              colorPercent="#33d067"
            />
            <CardStatistics
              title="Market Share"
              currentQuantity="$14,260"
              iconCaret={faCaretUp}
              numberPercent={2.65}
              colorPercent="#E94560"
            />
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="md:col-span-8 col-span-12 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg overflow-auto">
              <div className="flex items-center justify-between text-sm py-5 px-6">
                <h5 className="text-base font-semibold">Recent Purchases</h5>
                <button
                  className="py-1 px-[6px] text-[#4E97FD] border border-[#4e97fd80] rounded-lg hover:bg-[#4e97fd0a] hover:border-[#4E97FD]"
                  type="button"
                >
                  All Orders
                </button>
              </div>
              <Table meta={meta} col={columns} data={data} />
            </div>
            <div className="md:col-span-4 col-span-12 bg-white shadow-[0px_1px_3px_#03004717] rounded-lg overflow-auto">
              <div className="flex items-center justify-between text-sm py-5 px-6">
                <h5 className="text-base font-semibold">Stock Out Products</h5>
                <button
                  className="py-1 px-[6px] text-[#4E97FD] border border-[#4e97fd80] rounded-lg hover:bg-[#4e97fd0a] hover:border-[#4E97FD]"
                  type="button"
                >
                  All Products
                </button>
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
