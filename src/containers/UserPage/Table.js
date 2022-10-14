import React, { useState } from 'react';

function Tables() {
  const [students] = useState([
    { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
    { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
    { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
    { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
  ]);

  const renderTableData = () => {
    return students.map(student => {
      const { id, name, age, email } = student;
      return (
        <tr className="border-b" key={id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
            {id}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {name}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {age}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
            {email}
          </td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    const header = Object.keys(students[0]);
    return header.map((key, index) => (
      <th
        scope="col"
        className="text-sm font-medium text-gray-900 px-6 py-4 border-r"
        key={index}
      >
        {key.toUpperCase()}
      </th>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <thead className="border-b">
                <tr>{renderTableHeader()}</tr>
              </thead>
              <tbody>{renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
