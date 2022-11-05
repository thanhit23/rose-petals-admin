import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import MainWithTable from '../MainWithTable';
import ButtonRedirect from '../ButtonRedirect';

function Category({ data, meta, deleteCategory }) {
  const handleDeleteCategory = id => deleteCategory(id);
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
            <Link to={`/admin/category/edit/${id}`}>
              <button
                type="button"
                className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              >
                <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
              </button>
            </Link>
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
    <MainWithTable
      title="category"
      button={renderButton()}
      columns={columns}
      data={data}
      meta={meta}
    />
  );
}

export default Category;
