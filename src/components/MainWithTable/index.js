import React, { useMemo } from 'react';
import Breadcrumb from '../Breadcrumb';
import Search from '../Search';
import Table from '../../containers/Table';

function MainWithTable({ data, handleGoToPage, meta, columns, title, button }) {
  return useMemo(
    () =>
      data && (
        <>
          <Breadcrumb title={title} />
          <div className="flex justify-between">
            <Search message={title} />
            {button}
          </div>
          <div className="flex flex-col py-4 shadow-lg bg-white rounded mt-4">
            <Table
              goToPage={handleGoToPage}
              metaData={meta}
              col={columns}
              dataUser={data}
            />
          </div>
        </>
      ),
    [data],
  );
}

export default MainWithTable;
