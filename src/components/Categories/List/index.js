import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../../containers/Table';

function ListCategoryComponent({ data, meta, deleteCategory, gotoPage }) {
  const handleDeleteCategory = id => deleteCategory(id);

  const handleGoToPage = page => gotoPage(page);

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
              <Link to={`/admin/category/edit/${id}`}>
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </Link>
            </button>
            <button
              type="button"
              className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full ml-2"
              onClick={() => handleDeleteCategory(id)}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </button>
          </>
        );
      },
    },
  ]);

  const renderButton = () => (
    <ButtonRedirect to="/admin/category" title="add_category" icon={faPlus} />
  );

  return (
    <>
      <Breadcrumb title="category" />
      <div className="flex justify-between">
        <Search message="category" />
        {renderButton()}
      </div>
      <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
        <Table
          goToPage={handleGoToPage}
          meta={meta}
          col={columns}
          data={data}
        />
      </div>
    </>
  );
}

ListCategoryComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  deleteCategory: propsTypes.func,
};

export default ListCategoryComponent;
