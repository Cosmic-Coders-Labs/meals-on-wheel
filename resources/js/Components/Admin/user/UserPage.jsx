import React, { useState, useEffect } from 'react';
import Dropdown from '@/Components/Dropdown';
import { fetchUsers, deleteUser, updateUserStatus, capitalize } from '@/Utils/utils';
import DashboardHeader from '@/Components/DashboardHeader';
import UserTable from '@/Components/Tables/UserTable';

// Modal component to display user details
const UserDetailModal = ({ user, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">User Details</h2>

                {/* Basic User Information */}
                <div className="mb-4">
                    <strong>Name:</strong> {`${user.profile?.first_name || 'Unknown'} ${user.profile?.last_name || ''}`}
                </div>
                <div className="mb-4">
                    <strong>Email:</strong> {user.email || 'No Email'}
                </div>
                <div className="mb-4">
                    <strong>Status:</strong> {capitalize(user.status) || 'N/A'}
                </div>

                {/* Profile Details */}
                {user.profile && (
                    <>
                        <div className="mb-4">
                            <strong>Gender:</strong> {capitalize(user.profile.gender) || 'N/A'}
                        </div>
                        <div className="mb-4">
                            <strong>Age:</strong> {user.profile.age || 'N/A'}
                        </div>
                        <div className="mb-4">
                            <strong>Contact Number:</strong> {user.profile.contact_number || 'N/A'}
                        </div>
                        <div className="mb-4">
                            <strong>Address:</strong> {user.profile.address || 'N/A'}
                        </div>
                    </>
                )}

                {/* Location */}
                <div className="mb-4">
                    <strong>Latitude:</strong> {user.latitude || 'N/A'}
                </div>
                <div className="mb-4">
                    <strong>Longitude:</strong> {user.longitude || 'N/A'}
                </div>

                {/* Roles */}
                <div className="mb-4">
                    <strong>Role(s):</strong> {user.roles?.map(role => capitalize(role.name)).join(', ') || 'No Role'}
                </div>

                {/* Meals */}
                {user.meals?.length > 0 ? (
                    <div className="mb-4">
                        <strong>Meals:</strong>
                        <ul>
                            {user.meals.map((meal, index) => (
                                <li key={index}>{meal.name}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="mb-4">
                        <strong>Meals:</strong> No meals available
                    </div>
                )}

                <div className="flex justify-end">
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const getUsers = async () => {
        try {
            setLoading(true);
            const data = await fetchUsers();
            setUsers(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleStatusChange = async (userId, newStatus) => {
        try {
            const lowercaseStatus = newStatus.toLowerCase();
            await updateUserStatus(userId, lowercaseStatus);
            getUsers();
            alert(`Status updated to ${lowercaseStatus}`);
        } catch (error) {
            console.error("Failed to update status:", error);
            alert('Failed to update status. Please try again.');
        }
    };

    const handleAction = async (action, userId) => {
        if (action === 'View') {
            const user = users.find((u) => u.id === userId);
            setSelectedUser(user);
            setShowModal(true);
        } else if (action === 'Delete') {
            if (window.confirm('Are you sure you want to delete this user?')) {
                try {
                    await deleteUser(userId);
                    getUsers();
                } catch (error) {
                    console.error("Failed to delete user:", error);
                    alert('Failed to delete user. Please try again.');
                }
            }
        }
    };

    const tableHeaders = ['ID', 'Name', 'Email', 'Role', 'Status', 'Actions'];

    const tableData = users.map((user) => [
        user.id || 'N/A',
        `${user.profile?.first_name || 'Unknown'} ${user.profile?.last_name || ''}`,
        user.email || 'No Email',
        user.roles?.map(role => capitalize(role.name)).join(', ') || 'No Role',
        <Dropdown
            options={["Active", "Inactive"]}
            defaultValue={capitalize(user.status)}
            onSelect={(newStatus) => handleStatusChange(user.id, newStatus)}
        />,
        <Dropdown
            options={['View', 'Delete']}
            onSelect={(action) => handleAction(action, user.id)}
        />,
    ]);

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Users"
                actions={[]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : users.length === 0 ? (
                    <div>No users found</div>
                ) : (
                            <UserTable
                        headers={tableHeaders}
                        data={tableData}
                        page={page}
                        setPage={setPage}
                        showPagination={true}
                    />
                )}
            </div>

            {/* Display Modal if showModal is true */}
            {showModal && selectedUser && (
                <UserDetailModal user={selectedUser} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default UserPage;
