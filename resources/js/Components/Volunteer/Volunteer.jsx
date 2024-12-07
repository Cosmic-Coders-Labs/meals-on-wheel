import React, { useState } from "react";
import { Button, Pagination } from "@mui/material";
import Table from "@/Components/Volunteer/VolunteerReusable";

const VolunteerAssignment = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, task: "Meal Delivery", volunteer: "John Doe", date: "2024-11-27", status: "pending" },
    { id: 2, task: "Meal Delivery", volunteer: "Jane Smith", date: "2024-11-27", status: "completed" },
    { id: 3, task: "Meal Preparation", volunteer: "Gwen", date: "2024-11-27", status: "pending" },
    { id: 4, task: "Meal Delivery", volunteer: "Emma White", date: "2024-11-27", status: "pending" },
  ]);
  
  const [selectedAssignments, setSelectedAssignments] = useState([]);

  const toggleSelection = (id) => {
    setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id === id
          ? { ...assignment, selected: !assignment.selected }
          : assignment
      )
    );
    setSelectedAssignments((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    setAssignments(assignments.filter((assignment) => !selectedAssignments.includes(assignment.id)));
    setSelectedAssignments([]); // Clear selected assignments after delete
  };

  const handleAdd = () => {
    alert("Add new assignment functionality");
  };

  const handleEdit = () => {
    if (selectedAssignments.length > 0) {
      alert(`Edit assignment with IDs: ${selectedAssignments.join(", ")}`);
    } else {
      alert("Select at least one assignment to edit");
    }
  };

  const columns = [
    {
      header: "",
      accessor: "selected",
      render: (_, row) => (
        <input
          type="checkbox"
          className="h-4 w-4 text-blue-600 rounded focus:ring-0"
          checked={row.selected || false}
          onChange={() => toggleSelection(row.id)}
        />
      ),
    },
    { header: "#", accessor: "id" },
    { header: "Task", accessor: "task" },
    { header: "Volunteer Name", accessor: "volunteer" },
    { header: "Assigned Date", accessor: "date" },
    {
      header: "Status",
      accessor: "status",
      render: (status) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "actions",
      render: (_, row) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Viewing details for ${row.volunteer}`)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Volunteer Assignment</h2>

      {/* Action Buttons (Aligned to Right) */}
      <div className="flex justify-end space-x-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleEdit}
          disabled={selectedAssignments.length === 0}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color={selectedAssignments.length > 0 ? "error" : "default"}
          onClick={handleDelete}
          disabled={selectedAssignments.length === 0}
        >
          Delete
        </Button>
      </div>

      {/* Table */}
      <Table columns={columns} data={assignments} />

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
};

export default VolunteerAssignment;
