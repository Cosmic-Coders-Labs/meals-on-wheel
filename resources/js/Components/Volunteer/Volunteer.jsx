import React, { useState } from 'react';

// Dummy data for the volunteers
const volunteerData = [
  { id: 1, task: 'Meal Delivery', name: 'John Doe', date: '2024-11-27', status: 'pending' },
  { id: 2, task: 'Meal Delivery', name: 'Jane Smith', date: '2024-11-27', status: 'completed' },
  { id: 3, task: 'Meal Preparation', name: 'Gwen', date: '2024-11-27', status: 'pending' },
  { id: 4, task: 'Meal Delivery', name: 'Emma White', date: '2024-11-27', status: 'pending' },
];

const VolunteerAssignments = () => {
  const [volunteers, setVolunteers] = useState(volunteerData);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleDelete = () => {
    setVolunteers(volunteers.filter(v => v.id !== selectedVolunteer));
    setSelectedVolunteer(null);
  };

  const handleSelect = (id) => {
    setSelectedVolunteer(id);
  };

  const handleAdd = () => {
    // Functionality to add a new volunteer task
    alert("Add Volunteer Task - Implement this feature");
  };

  const handleEdit = () => {
    // Functionality to edit the selected volunteer task
    if (selectedVolunteer) {
      alert(`Edit Volunteer Task ID: ${selectedVolunteer}`);
    } else {
      alert('Please select a task to edit');
    }
  };

  return (
    <div className="volunteer-assignment-page">
      <h2>Volunteer Assignment</h2>
      <div className="button-group">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete} disabled={!selectedVolunteer}>Delete</button>
      </div>

      <table className="volunteer-table">
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Volunteer Name</th>
            <th>Assigned Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map(volunteer => (
            <tr key={volunteer.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedVolunteer === volunteer.id}
                  onChange={() => handleSelect(volunteer.id)}
                />
              </td>
              <td>{volunteer.task}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.date}</td>
              <td>
                <span className={`status ${volunteer.status}`}>{volunteer.status}</span>
              </td>
              <td>
                <button onClick={() => alert(`View details for ${volunteer.name}`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button disabled>&lt;</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>11</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default VolunteerAssignments;
