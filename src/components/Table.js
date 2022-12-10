import React from 'react';

const Table = ({ data, config }) => {
  const renderRows = data.map((row) => {
    const renderCells = config.map(column => {
      return (
        <td className="py-4 px-6" key={column.label}>
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr
        key={row.label}
        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
      >
        {renderCells}
      </tr>
    );
  });

  const renderHeaders = config.map((column) => {
    return <th className='text-left py-4 px-5' key={column.label}>{ column.label }</th>;
  });

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="border-1">{renderHeaders}</tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
}

export default Table;
