import ReusableTable from '@/Components/Table';
import React, { useState } from 'react';
import Overview from '../overview/overview';

const AdminDashboard = () => {
    const orders = [
        { date: '2023-10-01', member: 'Aung Aung', orderNumber: 'ORD001', status: 'delivered', action: 'View' },
        { date: '2023-10-02', member: 'Parker D John', orderNumber: 'ORD002', status: 'in transit', action: 'Track' },
        { date: '2023-10-03', member: 'Tony the Stack', orderNumber: 'ORD003', status: 'pending', action: 'Cancel' },
        { date: '2023-10-04', member: 'Power Ranger', orderNumber: 'ORD004', status: 'delivered', action: 'View' },
        { date: '2023-10-05', member: 'Golden Deign', orderNumber: 'ORD005', status: 'cancelled', action: 'Reorder' },
        { date: '2023-10-06', member: 'Sammy Fox', orderNumber: 'ORD006', status: 'in transit', action: 'Track' },
        { date: '2023-10-07', member: 'Mia Nova', orderNumber: 'ORD007', status: 'delivered', action: 'View' },
        { date: '2023-10-08', member: 'Bobby Rock', orderNumber: 'ORD008', status: 'pending', action: 'Cancel' },
        { date: '2023-10-09', member: 'Jordan Prime', orderNumber: 'ORD009', status: 'cancelled', action: 'Reorder' },
        { date: '2023-10-10', member: 'Olivia Blue', orderNumber: 'ORD010', status: 'delivered', action: 'View' },
        // More data...
    ];

    const tableHeaders = ['Select', 'Date', 'Member', 'Order Number', 'Status', 'Actions'];

    const tableData = orders.map(order => [
        <input type="checkbox" className="form-checkbox" />,
        order.date,
        order.member,
        order.orderNumber,
        order.status,
        <select className="border rounded p-1">
            <option>View</option>
            <option>Track</option>
            <option>Cancel</option>
            <option>Reorder</option>
        </select>,
    ]);

    return (
        <div className="flex-1 w-full">
            <Overview />
            <RecentOrders tableHeaders={tableHeaders} tableData={tableData} />
            <RecentOrders tableHeaders={tableHeaders} tableData={tableData} />
        </div>
    );
};



// Reusable Table Component


// Recent Orders Component
const RecentOrders = ({ tableHeaders, tableData }) => {
    const [page, setPage] = useState(0);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
            <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} />
        </div>
    );
};

export default AdminDashboard;
