import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const UserTable = ({ headers, data, page, setPage, showPagination }) => {
    const [filteredData, setFilteredData] = useState(data); // Start with all data
    const [searchQuery, setSearchQuery] = useState(''); // Single search box for all columns
    const [roleFilter, setRoleFilter] = useState(''); // Role filter state

    // Function to filter data based on search query and selected role
    useEffect(() => {
        const filtered = data.filter((row) => {
            // Check if the row matches the search query
            const matchesSearch = row.some((cell) =>
                cell.toString().toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Check if the row matches the selected role (assuming role is in one of the columns)
            const matchesRole = roleFilter ? row.some((cell) => cell.toString().toLowerCase().includes(roleFilter.toLowerCase())) : true;

            return matchesSearch && matchesRole;
        });

        setFilteredData(filtered);
    }, [data, searchQuery, roleFilter]);

    const rowsPerPage = 10;
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className='w-full'>
            <div className="mb-4 flex justify-start items-center w-full">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full md:w-3/4"
                    placeholder="Search..."
                />

                {/* Filter by role dropdown */}
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="ml-4 p-2 border border-gray-300 rounded w-full md:w-1/4"
                >
                    <option value="">Filter by Role</option>
                    {/* Assuming roles are available in the data, you can adjust the options accordingly */}
                    <option value="admin">Admin</option>
                    <option value="member">Member</option>
                    <option value="caregiver">Caregiver</option>
                    <option value="partner">Partner</option>
                    <option value="volunteer">Volunteer</option>
                </select>
            </div>

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
                    {filteredData.slice(start, end).map((row, index) => (
                        <tr key={index} className="border-b">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

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
                        {[...Array(totalPages).keys()].map(num => (
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

export default UserTable;
