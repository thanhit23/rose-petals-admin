import React from 'react';
import { useTable } from 'react-table';

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="flex flex-col py-4 boxshadow">
      <table {...getTableProps()} className="min-w-full text-center">
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="text-sm font-medium text-gray-900 px-6 py-4 border-b"
                >
                  {column.render('Header')}
                </th>
              ))}
              <th className="text-sm font-medium text-gray-900 px-6 py-4 border-b">
                Action
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()} className="border-b">
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td>action</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
