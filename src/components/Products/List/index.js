import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';

import { Link, useSearchParams } from 'react-router-dom';
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
        <img
          className="object-contain h-[100px] w-[100px]"
          src={thumbnail}
          alt=""
        />
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
        return index + 1;
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
              original: { id },
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

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    if (searchValue) setValueSearch(searchValue);
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
