import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use fetch
import Overview from '../overview/overview';
import Dropdown from '@/Components/Dropdown';
import ReusableTable from '@/Components/Table';
import { fetchMembers, fetchOrders, fetchUsers, fetchProfiles, fetchMeals } from '@/Utils/utils';

const AdminPage = () => {
    const [orders, setOrders] = useState([]);
    const [profiles, setProfiles] = useState([]); // Store profiles data

    // Utility function to get the user's name from profiles using user_id
    const get_name = (id) => {
        const profile = profiles.find(profile => profile.user_id === id);
        return profile?.first_name + " " + profile?.last_name || 'Unknown User'; // Return 'Unknown User' if no match
    };

    useEffect(() => {
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                setError("Failed to fetch orders.");
            }
        };

        const getProfiles = async () => {
            try {
                const data = await fetchProfiles();
                setProfiles(data); // Save profiles data to state
            } catch (error) {
                setError("Failed to fetch profiles.");
            }
        };

        getOrders();
        getProfiles();
    }, []);

    const tableHeaders = ['No.', 'Date', 'Member', 'Status', 'Actions'];
    const options = ['View', 'Track', 'Cancel', 'Reorder'];

    const tableData = orders
        .slice()
        .reverse()
        .slice(0, 10)
        .map(order => [
            order.order_id,
            order.order_date,
            get_name(order.member?.user_id),
            order.status,
            <Dropdown options={options} disabled={false} />
        ]);

    return (
        <div className="flex-1 w-full">
            <Overview />
            <RecentOrders tableHeaders={tableHeaders} tableData={tableData} reverse={true} />
            <br />
        </div>
    );
};

// Recent Orders Component
const RecentOrders = ({ tableHeaders, tableData }) => {
    const [page, setPage] = useState(0);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
            <ReusableTable
                headers={tableHeaders}
                data={tableData}
                page={page}
                setPage={setPage}
                showPagination={false}
                reverse={true}
            />
        </div>
    );
};

export default AdminPage;
