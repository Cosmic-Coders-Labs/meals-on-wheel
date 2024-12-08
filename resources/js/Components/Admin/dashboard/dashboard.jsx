import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use fetch
import Overview from '../overview/overview';
import Dropdown from '@/Components/Dropdown';
import ReusableTable from '@/Components/Table';
import { fetchMembers, fetchOrders, fetchUsers, fetchProfiles, fetchMeals } from '@/Utils/utils';
const AdminDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [members, setMembers] = useState([]);
    const [meals, setMeals] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const get_name = (id) => {
        // get the users name from the
    }

    useEffect(() => {
        // Fetch orders
        const getOrders = async () => {
            try {
                const data = await fetchOrders();
                setOrders(data);
            } catch (error) {
                setError("Failed to fetch orders.");
            }
            setLoading(false);
        };
        // Fetch members
        const getMembers = async () => {
            try {
                const data = await fetchMembers();
                setMembers(data);
            } catch (error) {
                setError("Failed to fetch members.");
            }
            setLoading(false);
        };
        // Fetch profiles
        const getProfiles = async () => {
            try {
                const data = await fetchProfiles();
                setProfiles(data);
            } catch (error) {
                setError("Failed to fetch profile.");
            }
            setLoading(false);
        };
        const getMeals = async () => {
            try {
                const data = await fetchMeals();
                setMeals(data);
            } catch (error) {
                setError("Failed to fetch profile.");
            }
            setLoading(false);
        };

        getProfiles();
        getMembers();
        getOrders();
        getMeals();
    }, []);



    const tableHeaders = ['No.', 'Date', 'Member', 'Order Number', 'Status', 'Actions'];
    const options = ['View', 'Track', 'Cancel', 'Reorder'];

    const tableData = orders
        .slice()
        .reverse()
        .slice(0, 10)
        .map(order => [
            order.order_id,
            order.order_date,
            order.member?.member_id ? order.member.name : 'N/A', // Use optional chaining to handle null/undefined
        order.orderNumber,
        order.status,
            <Dropdown options={options} disabled={false} />
    ]);


    return (
        <div className="flex-1 w-full">
            <Overview />
            <RecentOrders tableHeaders={tableHeaders} tableData={tableData} />
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
                showPagination={false} // Toggle this to show or hide pagination
            />

        </div>
    );
};

export default AdminDashboard;
