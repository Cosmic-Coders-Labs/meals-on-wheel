import { FaUser, FaUtensils, FaHandshake, FaTruck } from "react-icons/fa";

const Overview = () => {
    return (
        <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Total Members Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">10</h3>
                    <p className="text-gray-600">Total Members</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                    <FaUser className="text-blue-500 text-2xl" />
                </div>
            </div>

            {/* Total Meals Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">145</h3>
                    <p className="text-gray-600">Total Meals</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                    <FaUtensils className="text-green-500 text-2xl" />
                </div>
            </div>

            {/* Total Partners Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">40</h3>
                    <p className="text-gray-600">Total Partners</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                    <FaHandshake className="text-yellow-500 text-2xl" />
                </div>
            </div>

            {/* Current Delivery Count Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">3</h3>
                    <p className="text-gray-600">Delivery Count</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                    <FaTruck className="text-red-500 text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Overview;
