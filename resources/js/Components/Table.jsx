import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ReusableTable = ({ headers, data, page, setPage }) => {
    const rowsPerPage = 5;
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    return (
        <>
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-left text-gray-600">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(start, end).map((row, index) => (
                        <tr key={index} className="border-b">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-4 py-2">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
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
                            className={`px-4 py-2 rounded-full ${page === num ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
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
        </>
    );
};

export default ReusableTable;
