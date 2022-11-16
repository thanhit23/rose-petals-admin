import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Search';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import ButtonRedirect from '../../LinkWithFormatMessage';

function ListProductComponent({
  meta,
  data,
  getProducts,
  handleDeleteProduct,
}) {
  const handleGetProducts = page => getProducts(page);

  const renderAddButton = () => (
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
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Brand',
      accessor: 'brand',
    },
    {
      Header: 'Category Id',
      accessor: 'categoryId',
    },
    {
      Header: 'Description',
      accessor: 'description',
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
          <div className="flex">
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
            >
              <Link to={`/admin/product/edit/${id}`}>
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
          </div>
        );
      },
    },
  ]);

  const table = (
    <Table goToPage={handleGetProducts} meta={meta} col={columns} data={data} />
  );

  return useMemo(
    () => (
      <>
        <Breadcrumb title="list_product" />
        <div className="flex justify-between">
          <Search message="product" />
          {renderAddButton()}
        </div>
        <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
          {table}
        </div>
      </>
    ),
    [data],
  );
}

export default ListProductComponent;
