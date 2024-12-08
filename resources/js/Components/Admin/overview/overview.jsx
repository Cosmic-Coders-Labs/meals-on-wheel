import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHandshake, FaTruck, FaUser, FaUtensils } from 'react-icons/fa';
import { fetchCount } from '@/Utils/utils';

const Overview = () => {
    const [count, setCount] = useState({});

    useEffect(() => {
        // Fetch member count from backend
        const getCount = async () => {
            try {
                const data = await fetchCount();
                setCount(data);
            } catch (error) {
                console.log("Failed to fetch orders.");
            }
        };
        getCount();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Total Members Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{count.members_count}</h3>
                    <p className="text-gray-600">Total Members</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                    <FaUser className="text-blue-500 text-2xl" />
                </div>
            </div>

            {/* Total Meals Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{count.meals_count}</h3>
                    <p className="text-gray-600">Total Meals</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                    <FaUtensils className="text-green-500 text-2xl" />
                </div>
            </div>

            {/* Total Partners Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{count.partners_count}</h3>
                    <p className="text-gray-600">Total Partners</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                    <FaHandshake className="text-yellow-500 text-2xl" />
                </div>
            </div>

            {/* Current Delivery Count Card */}
            <div className="bg-white p-6 py-8 rounded-lg shadow flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">{count.delivery_count}</h3>
                    <p className="text-gray-600">Current Delivery Count</p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                    <FaTruck className="text-red-500 text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Overview;
