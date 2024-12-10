import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ReusableTable = ({ headers, data, page, setPage, showPagination, reverse }) => {
    const [filteredData, setFilteredData] = useState(data); // Start with all data
    const [searchQuery, setSearchQuery] = useState(''); // Single search box for all columns

    useEffect(() => {
        // Filter data whenever searchQuery changes
        const filtered = data.filter((row) => {
            return row.some((cell) =>
                cell.toString().toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilteredData(filtered);
    }, [data, searchQuery]);

    const rowsPerPage = 10;
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    // Conditionally reverse the filtered data if 'reverse' is true
    const rowsToDisplay = reverse ? [...filteredData.slice(start, end)].reverse() : filteredData.slice(start, end);

    return (
        <div className="w-full">
            <div className="mb-4 flex justify-start w-full">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                    placeholder="Search..."
                />
            </div>

            {/* Table Container with Horizontal Scrolling on Small Screens */}
            <div className="w-full overflow-x-auto sm:overflow-x-visible">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-2 text-left text-gray-600">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowsToDisplay.map((row, index) => (
                            <tr key={index} className="border-b">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-4 py-2">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {showPagination && (
                <div className="flex items-center justify-end space-x-2 mt-4">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 0}
                        className="bg-blue-500 text-white p-2 rounded-full"
                    >
                        <FiChevronLeft />
                    </button>
                    <div className="flex space-x-1">
                        {[...Array(totalPages).keys()].map((num) => (
                            <button
                                key={num}
                                onClick={() => handlePageChange(num)}
                                className={`px-4 py-2 rounded-full ${page === num ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}
                            >
                                {num + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page >= totalPages - 1}
                        className="bg-blue-500 text-white p-2 rounded-full"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReusableTable;
