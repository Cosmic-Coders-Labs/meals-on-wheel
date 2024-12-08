import React, { useState, useEffect } from "react";

const VolunteerAssignmentFormModal = ({ modalType, assignment, onClose, onSubmit }) => {
    const [task, setTask] = useState(assignment ? assignment.task?.task_id : ""); // Default task ID
    const [volunteer, setVolunteer] = useState(assignment ? assignment.volunteer?.volunteer_id : ""); // Default volunteer ID
    const [assignedDate, setAssignedDate] = useState(assignment ? assignment.assigned_at : "");
    const [status, setStatus] = useState(assignment ? assignment.status : "assigned");
    const [tasks, setTasks] = useState([]); // List of tasks
    const [volunteers, setVolunteers] = useState([]); // List of volunteers

    useEffect(() => {
        // Fetch tasks and volunteers when modal opens
        const fetchDropdownData = async () => {
            try {
                const tasksResponse = await fetch("/api/tasks");
                const volunteersResponse = await fetch("/api/volunteers");
                setTasks(await tasksResponse.json());
                setVolunteers(await volunteersResponse.json());
            } catch (error) {
                console.error("Failed to fetch tasks or volunteers:", error);
            }
        };

        fetchDropdownData();
    }, []);

    const handleSubmit = () => {
        onSubmit({ task_id: task, volunteer_id: volunteer, assigned_at: assignedDate, status });
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">
                    {modalType === "add" ? "Add Assignment" : "Edit Assignment"}
                </h2>

                {/* Task Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Task</label>
                <select
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md"
                >
                    <option value="" disabled>Select a Task</option>
                    {tasks.map((task) => (
                        <option key={task.task_id} value={task.task_id}>
                            {task.task_id}|{task.name}
                        </option>
                    ))}
                </select>

                {/* Volunteer Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Volunteer</label>
                <select
                    value={volunteer}
                    onChange={(e) => setVolunteer(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md"
                >
                    <option value="" disabled>Select a Volunteer</option>
                    {volunteers.map((volunteer) => (
                        <option key={volunteer.volunteer_id} value={volunteer.volunteer_id}>
                            {volunteer.volunteer_name}
                        </option>
                    ))}
                </select>

                {/* Assigned Date */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Assigned Date</label>
                <input
                    type="date"
                    value={assignedDate}
                    onChange={(e) => setAssignedDate(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md"
                />

                {/* Status */}
                <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-2 mb-4 border rounded-md"
                >
                    <option value="assigned">Assigned</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>

                {/* Buttons */}
                <div className="flex justify-between space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        {modalType === "add" ? "Add" : "Save"}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default VolunteerAssignmentFormModal;
