import React from 'react';
import { useTable, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

function Table({ col: columns, data, meta, goToPage }) {
  const { page: pages, limit, totalPages } = meta;

  const dataTable = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: limit },
    },
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
  } = dataTable;

  const totalPagesArr = Array.from({ length: totalPages });

  const handleClickPageButton = page => goToPage(page);

  const renderPageNumber = () => {
    return totalPagesArr.map((_, index) => {
      const isCurrentPage = pages === index + 1;
      return (
        <li
          key={index}
          className={classNames(
            'flex justify-center items-center w-8 h-8 m-2.5',
            {
              'rounded-full text-[#4E97FD] border border-[#4E97FD] border-solid':
                isCurrentPage,
            },
          )}
        >
          <button
            className="py-[5px] px-[10px]"
            type="button"
            onClick={() => handleClickPageButton(index + 1)}
            disabled={isCurrentPage}
          >
            {index + 1}
          </button>
        </li>
      );
    });
  };

  function renderPagination() {
    return (
      <div className="mt-4 flex justify-center">
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
            {renderPageNumber()}
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
    );
  }

  const renderBody = (
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr
            className="text-center border-solid border-b-[1px] border-[#D8E0E9]"
            {...row.getRowProps()}
          >
            {row.cells.map(cell => {
              return (
                <td className="py-[10px] px-[16px]" {...cell.getCellProps()}>
                  <span className="text-table">{cell.render('Cell')}</span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        {renderBody}
      </table>
      {meta.page && renderPagination()}
    </>
  );
}

Table.prototype = {
  col: PropTypes.array,
  data: PropTypes.array,
  meta: PropTypes.object,
  goToPage: PropTypes.func,
};

export default Table;
