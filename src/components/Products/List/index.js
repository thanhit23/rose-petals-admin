import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Search';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../../containers/Table';
import ButtonRedirect from '../../LinkWithFormatMessage';

function ListComponent({ meta, data, gotoPage, deleteProduct }) {
  const handleGoToPage = page => gotoPage(page);

  const handleDeleteProduct = id => deleteProduct(id);

  const renderButton = () => (
    <ButtonRedirect to="/admin/product" title="add_product" icon={faPlus} />
  );

  const columns = useMemo(() => [
    {
      Header: 'Id',
      accessor: 'id',
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
    },
    {
      Header: 'Action',
      accessor: 'action',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: props => {
        const {
          cell: {
            row: {
              values: { id },
            },
          },
        } = props;
        return (
          <>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
            >
              <Link to={`/admin/user/edit/${id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </Link>
            </button>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              onClick={() => handleDeleteProduct(id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </button>
          </>
        );
      },
    },
  ]);

  const table = (
    <Table goToPage={handleGoToPage} meta={meta} col={columns} data={data} />
  );

  return useMemo(
    () => (
      <>
        <Breadcrumb title="list_product" />
        <div className="flex justify-between">
          <Search message="product" />
          {renderButton()}
        </div>
        <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
          {Object.keys(meta).length ? table : ''}
        </div>
      </>
    ),
    [data],
  );
}

export default ListComponent;
