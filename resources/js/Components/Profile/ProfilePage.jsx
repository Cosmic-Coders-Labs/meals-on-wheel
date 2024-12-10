import { editProfile } from '@/Utils/utils';
import React, { useState, useEffect } from 'react';

const ProfilePage = ({ userData }) => {
    const [editing, setEditing] = useState(false);
    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: '',
        gender: '',
        birthday: '',
        contact_number: '',
        address: '',
    });

    // Initialize state with userData if available
    useEffect(() => {
        if (userData) {
            setUserId(userData.profile_id);
            setUser({
                first_name: userData.first_name || '',
                last_name: userData.last_name || '',
                age: userData.age || '',
                gender: userData.gender || '',
                birthday: userData.birthday || '',
                contact_number: userData.contact_number || '',
                address: userData.address || '',
            });
        }
    }, [userData]);

    // Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        setEditing(false);
        try {
            await editProfile(userId, user);
            alert('Profile updated!');
        } catch (error) {
            console.error(error);
            alert('Profile failed to update.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editing ? 'Edit Profile' : 'Profile Details'}
            </h2>

            <div className="space-y-4">
                {/* Name */}
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-600">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            value={user.first_name}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-600">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            value={user.last_name}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                </div>

                {/* Age & Gender */}
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-600">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={user.age}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-600">Gender</label>
                        <select
                            name="gender"
                            value={user.gender}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Birthday */}
                <div>
                    <label className="block text-gray-600">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        value={user.birthday}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-gray-600">Contact Number</label>
                    <input
                        type="text"
                        name="contact_number"
                        value={user.contact_number}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-600">Address</label>
                    <textarea
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-4 mt-4">
                    {editing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={() => setEditing(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setEditing(true)}
                            className="px-4 py-2 bg-yellow-500 text-white rounded"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
