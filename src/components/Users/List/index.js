import React, { useMemo } from 'react';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';

function ListUserComponent({ data, meta, gotoPage, handleDeleteUser }) {
  const handleGoToPage = page => gotoPage(page);

  const renderButton = () => (
    <ButtonRedirect to="/admin/user" title="add_user" icon={faPlus} />
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
              onClick={() => handleDeleteUser(id)}
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
        <Breadcrumb title="user" />
        <div className="flex justify-between">
          <Search message="user" />
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

ListUserComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  handleDeleteUser: propsTypes.func,
};

export default ListUserComponent;
