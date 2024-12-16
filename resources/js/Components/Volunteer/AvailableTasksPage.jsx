import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import ReusableTable from "@/Components/Table";
import DashboardHeader from "@/Components/DashboardHeader";
import { fetchVolunteerAssignments, addVolunteerAssignment, editVolunteerAssignment, cancelAssignment, getMe, updateAssignmentStatus, capitalize, fetchAvailableTasks, getUserById, updateTask } from "@/Utils/utils";
import VolunteerAssignmentFormModal from "@/Components/Forms/VolunteerAssignmentFormModal";

const AvailableTasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [currentUser, setCurrentUser] = useState(0);
    const [viewMode, setViewMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    // Fetch tasks on component mount
    useEffect(() => {
        const getAssignments = async () => {
            try {
                const myProfile = await getMe();
                const myUserData = await getUserById(myProfile.id);
                const taskData = await fetchAvailableTasks();
                setCurrentUser(myUserData)
                setTasks(taskData);
            } catch (error) {
                console.error("Failed to fetch tasks.");
            }
            setLoading(false);
        };
        getAssignments();
    }, []);

    const handleStatusUpdate = async (taskId, newStatus) => {
        try {
            // Update the status locally
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.task_id === taskId
                        ? { ...task, status: newStatus }
                        : task
                )
            );
            // Call backend to persist the status change
            await updateAssignmentStatus(taskId, newStatus);
            alert(`Status updated successfully to "${newStatus}".`);
        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Failed to update status. Please try again.");
        }
    };


    const handleAction = async (action, task) => {
        if (action === "Take") {
            const isConfirmed = window.confirm("Are you sure you want to take this task?");
            if (!isConfirmed) return;

            const today = new Date().toISOString().split('T')[0]; // Get only yyyy-mm-dd format

            try {
                await addVolunteerAssignment({
                    task_id: task.task_id,
                    volunteer_id: currentUser.volunteer_id,
                    assigned_at: today,
                    status: 'assigned',
                });
                await updateTask(task.task_id, { status: 'assigned' })
                alert("Successfuly took the task!");
                window.location.reload();
            } catch (error) {
                alert("Cannot take this task!")
            }
        }
    };



    // Table headers and data mapping
    const tableHeaders = ['ID', 'Task', 'Priority', 'Assigned To', 'Location', 'Date', 'Actions'];
    const options = ['Take'];

    const tableData = tasks.map((task) => [
        task.task_id || 'N/A',
        capitalize(task.name) || 'Unknown Task',
        capitalize(task.priority) || 'N/A',
        'Not Assigned',
        task.order?.member?.user?.profile?.address || 'N/A',
        task.created_at ? new Date(task.created_at).toLocaleDateString() : 'No Date',
        <Dropdown
            options={options}
            onSelect={(action) => handleAction(action, task)} // Handle action selection
        />,
    ]);


    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <DashboardHeader
                title="Available Tasks"
                actions={[]}
            />

            <div className="mt-6">
                {loading ? (
                    <div>Loading...</div>
                ) : tasks.length > 0 ? (
                    <ReusableTable headers={tableHeaders} data={tableData} page={page} setPage={setPage} showPagination={true} />
                ) : (
                    <div>No tasks found.</div>
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
        </div>
    );
};

export default AvailableTasksPage;
