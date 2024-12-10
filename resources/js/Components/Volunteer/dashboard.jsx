import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchVolunteerAssignments, addVolunteerAssignment, editVolunteerAssignment, cancelAssignment, getMe, updateAssignmentStatus, capitalize, getVolunteerAssignmentById, getUserById } from "@/Utils/utils";
import VolunteerAssignmentFormModal from "@/Components/Forms/VolunteerAssignmentFormModal";

const VolunteerAssignmentsPage = () => {
    const [assignments, setAssignments] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [currentUser, setCurrentUser] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [viewMode, setViewMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch assignments on component mount
    useEffect(() => {
        const getAssignments = async () => {
            try {
                const myProfile = await getMe();
                const myUserData = await getUserById(myProfile.id);
                const taskData = await getVolunteerAssignmentById(myUserData.volunteer_id);
                console.log(taskData);
                setCurrentUser(myUserData)
                setAssignments(taskData);
            } catch (error) {
                console.error("Failed to fetch assignments.");
            }
            setLoading(false);
        };
        getAssignments();
    }, []);

    const handleStatusUpdate = async (assignmentId, newStatus) => {
        try {
            // Update the status locally
            setAssignments((prevAssignments) =>
                prevAssignments.map((assignment) =>
                    assignment.assignment_id === assignmentId
                        ? { ...assignment, status: newStatus }
                        : assignment
                )
            );
            // Call backend to persist the status change
            await updateAssignmentStatus(assignmentId, newStatus);
            alert(`Status updated successfully to "${newStatus}".`);
        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Failed to update status. Please try again.");
        }
    };


    // Handle actions for dropdown
    const handleAction = async (action, assignment) => {
        if (action === "View") {
            setSelectedAssignment(assignment);
            setViewMode(true); // Enable View mode
        } else if (action === "Edit") {
            setSelectedAssignment(assignment);
            setModalType("edit");
            setShowModal(true);
        } else if (action === "Cancel") {
            if (window.confirm(`Are you sure you want to cancel the assignment "${assignment.task ? assignment.task.name : 'Unknown Task'}"?`)) {
                try {
                    await cancelAssignment(assignment.assignment_id);
                    setAssignments((prevAssignments) =>
                        prevAssignments.filter((a) => a.assignment_id !== assignment.assignment_id)
                    );
                    alert(`Assignment "${assignment.task ? assignment.task.name : 'Unknown Task'}" canceled successfully.`);
                } catch (error) {
                    console.error("Failed to cancel assignment:", error);
                    alert("Failed to cancel assignment. Please try again.");
                }
            }
        }
    };

    // Handle form submission for add/edit
    const handleSubmit = async (assignmentData) => {
        try {
            if (modalType === "add") {
                await addVolunteerAssignment(assignmentData);
                alert("Assignment added successfully.");
            } else if (modalType === "edit") {
                await editVolunteerAssignment(selectedAssignment.assignment_id, assignmentData);
                alert("Assignment updated successfully.");
            }
            setShowModal(false);
            setSelectedAssignment(null);
            const updatedAssignments = await fetchVolunteerAssignments();
            setAssignments(updatedAssignments);
        } catch (error) {
            console.error("Failed to submit assignment data:", error);
            alert("Failed to process assignment. Please try again.");
        }
    };

    // Table headers and data mapping
    const tableHeaders = ['ID', 'Task', 'Volunteer', 'Assigned Date', 'Status'];

    const tableData = assignments.map((assignment) => [
        assignment.assignment_id || 'N/A', // Assignment ID
        assignment.task?.name || 'Unknown Task', // Task name
        `${assignment.volunteer?.volunteer_name || 'Unknown'}`, // Volunteer name
        assignment.assigned_at ? new Date(assignment.assigned_at).toLocaleDateString() : 'No Date',
        <Dropdown
            options={["assigned", "completed", "canceled"]}
            defaultValue={capitalize(assignment.status)}
            onSelect={(newStatus) => handleStatusUpdate(assignment.assignment_id, newStatus)}
        />,
    ]);


    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Volunteer Task Assignments"
                actions={[
                    {
                        label: "Add Assignment",
                        onClick: () => {
                            setModalType("add");
                            setShowModal(true);
                        },
                        color: "bg-blue-500 hover:bg-blue-600",
                    },
                ]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : assignments.length > 0 ? (
                    <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} showPagination={true} />
                ) : (
                    <div>No assignments found.</div>
                )}
            </div>

            {viewMode && selectedAssignment && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-xl font-semibold mb-4">View Assignment</h2>
                        <p className="mb-2">
                            <strong>Task:</strong> {selectedAssignment.task?.name || 'Unknown Task'}
                        </p>
                        <p className="mb-2">
                            <strong>Volunteer:</strong> {selectedAssignment.volunteer?.volunteer_name || 'Unknown'}
                        </p>
                        <p className="mb-2">
                            <strong>Assigned Date:</strong> {selectedAssignment.assigned_at || 'No Date'}
                        </p>
                        <p className="mb-4">
                            <strong>Status:</strong> {selectedAssignment.status || 'No Status'}
                        </p>
                        <button
                            onClick={() => setViewMode(false)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showModal && (
                <VolunteerAssignmentFormModal
                    modalType={modalType}
                    assignment={modalType === "edit" ? selectedAssignment : null}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleSubmit}
                    userId={currentUser.id}
                />
            )}
        </div>
    );
};

export default VolunteerAssignmentsPage;
