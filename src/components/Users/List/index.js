import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useSearchParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';
import messages from './messages';

function ListUserComponent({ data, meta, handleGetUsers, handleDeleteUser }) {
  const [valueSearch, setValueSearch] = useState();

  const handleGoToPage = page => handleGetUsers({ page });

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
              original: { id },
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

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    if (searchValue) setValueSearch(searchValue);
  }, []);

  return useMemo(
    () => (
      <>
        <Breadcrumb title="user" />
        <div className="flex justify-between">
          <Search
            message="user"
            valueSearch={valueSearch}
            handleKeywordSearch={handleGetUsers}
          />
          <ButtonRedirect to="/admin/user" title="add_user" icon={faPlus} />
        </div>
        <div className="flex flex-col shadow-lg bg-white rounded mt-4">
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
  handleGetUsers: propsTypes.func,
  handleDeleteUser: propsTypes.func,
};

export default ListUserComponent;
