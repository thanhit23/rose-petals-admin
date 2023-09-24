import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useSearchParams } from 'react-router-dom';
import clx from 'classnames';
import { FormattedMessage } from 'react-intl';

import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';
import messages from './messages';
import { ARRAY_STATUS } from './constants';
import ConfirmModal from '../../ConfirmModal';

function ListOrderComponent({ data, meta, getOrders, handleDeleteOrder }) {
  const [valueSearch, setValueSearch] = useState();

  const handleGetOrders = options => getOrders(options);

  const colorStatusMapping = ['cancelled', 'pending', 'processing', 'delivered'];

  const handleStatus = status => (
    <div className={clx(colorStatusMapping[status], 'rounded-lg inline-flex text-xs py-1 px-4')}>
      <FormattedMessage {...messages.status[ARRAY_STATUS[status]]} />
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
      Header: 'User Name',
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
      Header: 'Address',
      accessor: 'address',
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
              original: { _id },
            },
          },
        } = props;
        return (
          <>
            <button type="button" className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full">
              <Link to={`/admin/order/${_id}/detail/${_id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faEye} />
              </Link>
            </button>
            <button type="button" className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full">
              <Link to={`/admin/order/edit/${_id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </Link>
            </button>
            <ConfirmModal classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full" callback={() => handleDeleteOrder(_id)}>
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </ConfirmModal>
          </>
        );
      },
    },
  ]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    searchValue && setValueSearch(searchValue);
  }, []);

  return useMemo(
    () => (
      <>
        <Breadcrumb title="list_order" />
        <div className="flex justify-between">
          <Search message="order" valueSearch={valueSearch} handleKeywordSearch={handleGetOrders} />
        </div>
        <div className="flex flex-col shadow-lg bg-white rounded mt-4 overflow-auto">
          <Table goToPage={handleGetOrders} meta={meta} col={columns} data={data} pagination />
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
