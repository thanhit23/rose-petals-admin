import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';

function ListBrandsComponent({ data, meta, handleDeleteBrand, gotoPage }) {
  const handleGoToPage = page => gotoPage(page);

  const renderAction = props => {
    const {
      cell: {
        row: {
          values: { id },
        },
      },
    } = props;

    return (
      <>
        <Link to={`/admin/brand/edit/${id}`}>
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
          onClick={() => handleDeleteBrand(id)}
        >
          <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
        </button>
      </>
    );
  };

  const renderImages = props => {
    const {
      cell: {
        row: {
          values: { logo },
        },
      },
    } = props;

    return <img className="w-9 m-auto" src={logo} alt="" />;
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
      Header: 'Logo',
      accessor: 'logo',
      Cell: props => renderImages(props),
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: props => renderAction(props),
    },
  ]);

  return useMemo(
    () => (
      <>
        <Breadcrumb title="list_brand" />
        <div className="flex justify-between">
          <Search message="brand" />
          <ButtonRedirect to="/admin/brand" title="add_brand" icon={faPlus} />
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
    ),
    [data],
  );
}

ListBrandsComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  deleteBrand: propsTypes.func,
};

export default ListBrandsComponent;
