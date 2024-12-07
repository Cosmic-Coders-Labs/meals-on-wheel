import React from "react";

const Table = ({ columns, data, onRowAction }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3 text-left">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-3">
                  {column.render
                    ? column.render(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
