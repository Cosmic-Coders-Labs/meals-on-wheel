import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const initialUsers = [
  { id: 1, username: "Aung Aung", role: "member", email: "aung@gmail.com", status: "active" },
  { id: 2, username: "Parker D John", role: "caregiver", email: "parker@gmail.com", status: "inactive" },
  { id: 3, username: "Tony the Stack", role: "donor", email: "tony@stock.com", status: "active" },
  { id: 4, username: "Power Ranger", role: "volunteer", email: "power@ranger.com", status: "active" },
  { id: 5, username: "Golden Deign", role: "partner", email: "golden@deign.com", status: "active" },
  { id: 6, username: "David's Chicken", role: "partner", email: "david@lark.com", status: "active" },
  { id: 7, username: "Gwen", role: "volunteer", email: "gwen@stacy.com", status: "active" },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleDelete = () => {
    const updatedUsers = users.filter((user) => !selectedUsers.includes(user.id));
    setUsers(updatedUsers);
    setSelectedUsers([]); // Clear selection after deletion
  };

  return (
      <div className="px-auto md:pl-56flex flex-col p-8 mx-auto w-full bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Users</h2>
          <div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
              onClick={() => alert("Add User")}
            >
              Add
            </button>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 hover:bg-yellow-600"
              onClick={() => alert("Edit User")}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>

        <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedUsers(e.target.checked ? users.map((u) => u.id) : [])
                  }
                  checked={selectedUsers.length === users.length && users.length > 0}
                />
              </th>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b">
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => toggleUserSelect(user.id)}
                  />
                </td>
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{user.username}</td>
                <td className="py-3 px-4">{user.role}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    className="bg-purple-500 text-white py-1 px-3 rounded hover:bg-purple-600"
                    onClick={() => alert(`Viewing user ${user.username}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-6 space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded">&lt;</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">1</button>
          <button className="bg-gray-200 px-4 py-2 rounded">2</button>
          <button className="bg-gray-200 px-4 py-2 rounded">3</button>
          <button className="bg-gray-200 px-4 py-2 rounded">...</button>
          <button className="bg-gray-200 px-4 py-2 rounded">&gt;</button>
        </div>
      </div>
  );
};

export default Users;
