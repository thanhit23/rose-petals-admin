import React, { useMemo } from 'react';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';
import messages from './messages';

function ListUserComponent({ data, meta, gotoPage, handleDeleteUser }) {
  const handleGoToPage = page => gotoPage(page);

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
      Cell: props => {
        const {
          cell: {
            row: {
              values: { gender },
            },
          },
        } = props;
        if (gender === 1) {
          return <FormattedMessage {...messages.gender_female} />;
        }
        return <FormattedMessage {...messages.gender_male} />;
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
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

  return useMemo(
    () => (
      <>
        <Breadcrumb title="user" />
        <div className="flex justify-between">
          <Search message="user" />
          <ButtonRedirect to="/admin/user" title="add_user" icon={faPlus} />
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

ListUserComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  gotoPage: propsTypes.func,
  handleDeleteUser: propsTypes.func,
};

export default ListUserComponent;
