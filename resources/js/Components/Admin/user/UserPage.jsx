import React, { useState, useEffect } from 'react';
import ReusableTable from '@/Components/Table';
import Dropdown from '@/Components/Dropdown';
import axios from 'axios';
import { fetchUsers } from '@/Utils/utils';
import DashboardHeader from '@/Components/DashboardHeader';

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch user data
    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
            setLoading(false);
        };

        getUsers();
    }, []);

    const tableHeaders = ['ID', 'Name', 'Email', 'Role', 'Status', 'Actions'];

    const tableData = users.map((user) => [
        user.id || 'N/A',
        `${user.profile?.first_name || 'Unknown'} ${user.profile?.last_name || ''}`,
        user.email || 'No Email',
        user.roles?.map(role => role.name).join(', ') || 'No Role', // Joining roles if multiple
        user.status || 'Unknown',
        <Dropdown
            options={['View', 'Edit', 'Delete']}
            onSelect={(action) => handleAction(action, user.id)}
        />,
    ]);

    // Handle actions (View, Edit, Delete)
    const handleAction = (action, userId) => {
        if (action === 'View') {
            viewUser(userId);
        } else if (action === 'Edit') {
            editUser(userId);
        } else if (action === 'Delete') {
            deleteUser(userId);
        }
    };

    // View user details (can be extended to navigate to a detailed view)
    const viewUser = (userId) => {
        console.log(`View user with ID: ${userId}`);
        // Navigate to a detailed view page or show a modal
    };

    // Edit user details (can be extended to navigate to an edit page or show a modal)
    const editUser = (userId) => {
        console.log(`Edit user with ID: ${userId}`);
        // Navigate to an edit page or open an edit modal
    };

    // Delete user and update the state
    const deleteUser = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`/admin/users/${userId}`)
                .then(() => {
                    // Update state by filtering out the deleted user
                    setUsers(users.filter((user) => user.id !== userId));
                })
                .catch((error) => {
                    console.error('Error deleting user:', error);
                });
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Users"
                actions={[
                    { label: "Add", onClick: () => console.log('Add user clicked'), color: "bg-blue-500 hover:bg-blue-600" }
                ]}
            />

            {/* Page Content */}
            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ReusableTable
                        headers={tableHeaders}
                        data={tableData}
                        page={page}
                        setPage={setPage}
                        showPagination={true}
                    />
                )}
            </div>
        </div>
    );
};

export default UserPage;
