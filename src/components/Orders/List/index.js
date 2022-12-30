import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useSearchParams } from 'react-router-dom';
import clx from 'classnames';
import { FormattedMessage } from 'react-intl';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';
import messages from './messages';

function ListOrderComponent({ data, meta, getOrders, handleDeleteOrder }) {
  const [valueSearch, setValueSearch] = useState();

  const handleGetOrders = options => getOrders(options);

  const arrStatus = ['cancelled', 'pending', 'processing', 'delivered'];

  const handleStatus = status => (
    <div
      className={clx(
        {
          'text-[#e94560] bg-[#ffeaea] rounded-lg': status === 0,
          'text-[#4e97fd] bg-[#dbf0fe] rounded-lg': status === 1,
          'text-[#ffcd4e] bg-[#fff8e5] rounded-lg': status === 2,
          'text-[#33d067] bg-[#E7F9ED] rounded-lg': status === 3,
        },
        'inline-flex text-xs py-1 px-4',
      )}
    >
      <FormattedMessage {...messages.status[arrStatus[status]]} />
    </div>
  );

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
        const { page, limit } = meta;
        return (page - 1) * limit + (index + 1);
      },
    },
    {
      Header: 'Name User',
      accessor: 'user',
      Cell: props => {
        const {
          cell: {
            row: {
              original: {
                user: { name },
              },
            },
          },
        } = props;
        return name;
      },
    },
    {
      Header: 'Billing Address',
      accessor: 'billingAddress',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: props => {
        const {
          cell: {
            row: {
              original: { status },
            },
          },
        } = props;
        return handleStatus(status);
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: props => {
        const {
          cell: {
            row: {
              original: { id },
            },
          },
        } = props;
        return (
          <>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
            >
              <Link to={`/admin/order/edit/${id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </Link>
            </button>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              onClick={() => handleDeleteOrder(id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </button>
          </>
        );
      },
    },
  ]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    if (searchValue) setValueSearch(searchValue);
  }, []);

  return useMemo(
    () => (
      <>
        <Breadcrumb title="list_order" />
        <div className="flex justify-between">
          <Search
            message="order"
            valueSearch={valueSearch}
            handleKeywordSearch={handleGetOrders}
          />
          <ButtonRedirect to="/admin/order" title="add_order" icon={faPlus} />
        </div>
        <div className="flex flex-col shadow-lg bg-white rounded mt-4">
          <Table
            goToPage={handleGetOrders}
            meta={meta}
            col={columns}
            data={data}
            pagination
          />
        </div>
      </>
    ),
    [data],
  );
}

ListOrderComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  getOrders: propsTypes.func,
  handleDeleteOrder: propsTypes.func,
};

export default ListOrderComponent;
