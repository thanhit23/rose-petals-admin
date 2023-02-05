import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';

import { Link, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Search from '../../Search';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import ButtonRedirect from '../../LinkWithFormatMessage';
import ConfirmModal from '../../ConfirmModal';

function ListProductComponent({
  meta,
  data,
  getProducts,
  handleDeleteProduct,
}) {
  const [valueSearch, setValueSearch] = useState();

  const handleGetProducts = options => getProducts(options);

  const renderImages = props => {
    const {
      cell: {
        row: {
          original: { thumbnail },
        },
      },
    } = props;
    return (
      <div className="flex justify-center">
        <div className="flex border-[#ebeff3] border-[1px] border-solid">
          <img
            className="object-cover h-[40px] w-[40px] rounded"
            src={thumbnail}
            alt=""
          />
        </div>
      </div>
    );
  };

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
      Cell: props => {
        const {
          cell: {
            row: {
              values: {
                brand: { name },
              },
            },
          },
        } = props;
        return <h1>{name}</h1>;
      },
    },
    {
      Header: 'Category',
      accessor: 'category',
      Cell: props => {
        const {
          cell: {
            row: {
              values: {
                category: { name },
              },
            },
          },
        } = props;
        return <h1>{name}</h1>;
      },
    },
    {
      Header: 'Image',
      accessor: 'thumbnail',
      Cell: props => renderImages(props),
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
          <div className="flex">
            <Link to={`/admin/product/edit/${_id}`}>
              <div className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full flex justify-center items-center">
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </div>
            </Link>
            <ConfirmModal
              classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              callback={() => handleDeleteProduct(_id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </ConfirmModal>
          </div>
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
        <Breadcrumb title="list_product" />
        <div className="flex justify-between">
          <Search
            message="product"
            valueSearch={valueSearch}
            handleKeywordSearch={handleGetProducts}
          />
          <ButtonRedirect
            to="/admin/product"
            title="add_product"
            icon={faPlus}
          />
        </div>
        <div className="flex flex-col shadow-lg bg-white rounded mt-4">
          <Table
            goToPage={handleGetProducts}
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

ListProductComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  handleGetProduct: propsTypes.func,
  handleDeleteProduct: propsTypes.func,
};

export default ListProductComponent;
