import React from 'react';
import Sidebar from "./Sidebar"; 

const Admindashboard = () => {
  const orders = [
    {
      date: '2023-10-01',
      member: 'Aung Aung',
      orderNumber: 'ORD001',
      status: 'delivered',
      action: 'View',
    },
    {
      date: '2023-10-02',
      member: 'Parker D John',
      orderNumber: 'ORD002',
      status: 'in transit',
      action: 'Track',
    },
    {
      date: '2023-10-03',
      member: 'Tony the Stack',
      orderNumber: 'ORD003',
      status: 'pending',
      action: 'Cancel',
    },
    {
      date: '2023-10-04',
      member: 'Power Ranger',
      orderNumber: 'ORD004',
      status: 'delivered',
      action: 'View',
    },
    {
      date: '2023-10-05',
      member: 'Golden Deign',
      orderNumber: 'ORD005',
      status: 'cancelled',
      action: 'Reorder',
    },
  ];

  const tableHeaders = ['Date', 'Member', 'Order Number', 'Status', 'Actions'];

  const tableData = orders.map(order => [
    order.date,
    order.member,
    order.orderNumber,
    order.status,
    order.action
  ]);

  return (
    <div className="flex-1 p-6 bg-gray-50">
        <Overview />
        <RecentOrders tableHeaders={tableHeaders} tableData={tableData} />
    </div>
  );
};



// Overview Component
const Overview = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800">10</h3>
        <p className="text-gray-600">Total Members</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800">145</h3>
        <p className="text-gray-600">Total Meals</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800">40</h3>
        <p className="text-gray-600">Total Partners</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold text-gray-800">3</h3>
        <p className="text-gray-600">Current Delivery Count</p>
      </div>
    </div>
  );
};

// Reusable Table Component
const ReusableTable = ({ headers, data }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-2 text-left text-gray-600">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-2">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Recent Orders Component
const RecentOrders = ({ tableHeaders, tableData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
      <ReusableTable headers={tableHeaders} data={tableData} />
    </div>
  );
};

export default Admindashboard;
