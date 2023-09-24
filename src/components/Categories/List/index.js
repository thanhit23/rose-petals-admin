import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import ButtonRedirect from '../../LinkWithFormatMessage';
import ConfirmModal from '../../ConfirmModal';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';

function ListCategoryComponent({ data, meta, getCategory, deleteCategory }) {
  const [valueSearch, setValueSearch] = useState();

  const handleDeleteCategory = id => deleteCategory(id);

  const handleGetCategories = options => getCategory(options);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    searchValue && setValueSearch(searchValue);
  }, []);

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
      Header: 'Slug',
      accessor: 'slug',
    },
    {
      Header: 'Action',
      accessor: 'action',
      // eslint-disable-next-line react/no-unstable-nested-components
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
            <button type="button" className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full">
              <Link to={`/admin/category/edit/${id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </Link>
            </button>
            <ConfirmModal
              classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              callback={() => handleDeleteCategory(id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </ConfirmModal>
          </>
        );
      },
    },
  ]);

  return (
    <>
      <Breadcrumb title="list_category" />
      <div className="flex justify-between">
        <Search message="category" valueSearch={valueSearch} handleKeywordSearch={handleGetCategories} />
        <ButtonRedirect to="/admin/category" title="add_category" icon={faPlus} />
      </div>
      <div className="flex flex-col shadow-lg bg-white rounded mt-4">
        <Table goToPage={handleGetCategories} meta={meta} col={columns} data={data} pagination />
      </div>
    </>
  );
}

ListCategoryComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  getCategory: propsTypes.func,
  deleteCategory: propsTypes.func,
};

export default ListCategoryComponent;
