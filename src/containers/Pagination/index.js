import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import {
  faChevronRight,
  faChevronLeft,
  faTrash,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

function PaginationTable({ col, dataUser, metaData, goToPage }) {
  const { page: pages, limit, totalPages } = metaData;
  const columns = useMemo(() => col, []);
  const handleGoToPage = indexPage => {
    goToPage(indexPage);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data: dataUser,
      initialState: { pageIndex: 0, pageSize: limit },
    },
    usePagination,
  );
  const arr = Array.from(Array(totalPages), (x, index) => index);
  const elements = arr.map(item => {
    return (
      <li
        key={item}
        className={classNames(
          'flex justify-center items-center w-8 h-8 m-2.5',
          {
            'rounded-full text-[#4E97FD] border border-[#4E97FD] border-solid':
              pages === item + 1,
          },
        )}
      >
        <button
          className="py-[5px] px-[10px]"
          type="button"
          onClick={() => handleGoToPage(item + 1)}
          disabled={pages === item + 1}
        >
          {item + 1}
        </button>
      </li>
    );
  });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr
                className="text-center border-solid border-b-[1px] border-[#D8E0E9]"
                {...row.getRowProps()}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      className="py-[10px] px-[16px]"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td>
                  <button
                    type="button"
                    className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
                  >
                    <FontAwesomeIcon className="text-[#7D879C]" icon={faPen} />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
                  >
                    <FontAwesomeIcon
                      className="text-[#7D879C]"
                      icon={faTrash}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-8 flex justify-center">
        <div>
          <ul className="flex">
            <li
              className={classNames(
                'flex justify-center items-center w-8 h-8 m-2.5 rounded-full text-[#4E97FD] border border-[#4E97FD] border-solid',
                {
                  'opacity-70': !canPreviousPage,
                },
              )}
            >
              <button
                type="button"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </li>
            {elements}
            <li
              className={classNames(
                'flex justify-center items-center w-8 h-8 m-2.5 rounded-full text-[#4E97FD] border border-[#4E97FD] border-solid',
                {
                  'opacity-70': !canNextPage,
                },
              )}
            >
              <button
                type="button"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PaginationTable;
