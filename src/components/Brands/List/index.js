import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import propsTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

import ButtonRedirect from '../../LinkWithFormatMessage';
import Breadcrumb from '../../Breadcrumb';
import Search from '../../Search';
import Table from '../../Table';
import ConfirmModal from '../../ConfirmModal';

function ListBrandsComponent({ data, meta, getBrands, handleDeleteBrand }) {
  const [valueSearch, setValueSearch] = useState();

  const handleGetBrands = options => getBrands(options);

  const renderAction = props => {
    const {
      cell: {
        row: {
          original: { _id },
        },
      },
    } = props;

    return (
      <>
        <Link to={`/admin/brand/edit/${_id}`}>
          <button type="button" className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full">
            <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
          </button>
        </Link>
        <ConfirmModal classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full" callback={() => handleDeleteBrand(_id)}>
          <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
        </ConfirmModal>
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

    return <img className="object-cover h-[40px] w-[40px] rounded m-auto" src={logo} alt="" />;
  };

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
          <Search message="brand" valueSearch={valueSearch} handleKeywordSearch={handleGetBrands} />
          <ButtonRedirect to="/admin/brand" title="add_brand" icon={faPlus} />
        </div>
        <div className="flex flex-col shadow-lg bg-white rounded mt-4">
          <Table goToPage={handleGetBrands} meta={meta} col={columns} data={data} pagination />
        </div>
      </>
    ),
    [data],
  );
}

ListBrandsComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  getBrands: propsTypes.func,
  handleDeleteBrand: propsTypes.func,
};

export default ListBrandsComponent;
