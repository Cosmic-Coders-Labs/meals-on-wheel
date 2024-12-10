import React, { useEffect, useState } from "react";
import axios from "axios";
import { assignCaregiverToMember, fetchAllMembersByCaregiverId, fetchCaregiversToMember, fetchMembers, getFreeMembersFromCaregiver, getMe, getUserById } from "@/Utils/utils";

const CaregiverAssignmentPage = () => {
    const [caregiver, setCaregiver] = useState(null); // Logged-in caregiver
    const [members, setMembers] = useState([]);
    const [assignedMembers, setAssignedMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const membersResponse = await fetchMembers();
                const myProfile = await getMe();
                const caregiverResponse = await getUserById(myProfile.id);

                setCaregiver(caregiverResponse);
                setMembers(membersResponse);

                // Fetch assigned members
                const assignedResponse = await fetchAllMembersByCaregiverId(caregiverResponse.caregiver_id);
                setAssignedMembers(Array.isArray(assignedResponse.data) ? assignedResponse.data : [assignedResponse.data]);

            } catch (error) {
                console.error("Failed to fetch data:", error);
                setMessage("Error loading data. Please try again.");
            }
        };

        fetchData();
    }, []);

    const handleAssign = async () => {
        if (!selectedMember) {
            setMessage("Please select a member to assign.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const data = {
                caregiver_id: caregiver.caregiver_id,
                member_id: parseInt(selectedMember),
            }
            const response = await assignCaregiverToMember(data);
            // Update assigned members
            window.location.reload();
        } catch (error) {
            console.error("Failed to assign caregiver:", error);
            setMessage("Failed to assign caregiver. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="flex w-full max-w-5xl gap-6">
                {/* Assignment Form */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
                        Assign Yourself to a Member
                    </h1>

                    {message && (
                        <div
                            className={`text-center text-sm p-2 mb-4 rounded ${message.includes("Success")
                                ? "text-green-600 bg-green-100"
                                : "text-red-600 bg-red-100"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                        </label>
                        <div className="bg-gray-100 p-2 rounded text-gray-600">
                            {caregiver ? `${caregiver.profile.first_name} ${caregiver.profile.last_name}` : "Loading..."}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="member-dropdown" className="block text-sm font-medium text-gray-700 mb-2">
                            Select a Member
                        </label>
                        <select
                            id="member-dropdown"
                            className="w-full border-gray-300 p-2 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={selectedMember}
                            onChange={(e) => setSelectedMember(e.target.value)}
                        >
                            <option value="">Choose a member</option>
                            {members.map((member) => (
                                <option key={member.user?.profile.first_name} value={member.member_id}>
                                    {member.user?.profile.first_name} {member.user?.profile.last_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        className={`w-full p-2 rounded font-medium text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                        onClick={handleAssign}
                        disabled={loading}
                    >
                        {loading ? "Assigning..." : "Assign"}
                    </button>
                </div>

                {/* Assigned Members Table */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full flex-1">
                    <h1 className="text-xl font-bold text-gray-800 mb-4">Assigned Members</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">#</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignedMembers.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-4 py-2 text-center text-gray-500">
                                            No members assigned.
                                        </td>
                                    </tr>
                                ) : (
                                    assignedMembers.map((member, index) => (
                                        <tr key={member.member_name} className="border-t">
                                            <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                                            <td className="px-4 py-2 text-sm text-gray-600">
                                                {member.member_name}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-600">
                                                Remove?
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaregiverAssignmentPage;
