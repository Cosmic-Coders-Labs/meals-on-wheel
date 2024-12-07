import React, { useState } from "react";
import { Button, Pagination } from "@mui/material"; // Import Button and Pagination from Material UI
import Table from "@/Components/Volunteer/VolunteerReusable"; // Reusable Table component

const MealsPage = () => {
  const [meals, setMeals] = useState([
    { id: 1, name: "Chicken Soup", description: "A hearty chicken soup with vegetables", price: 5.0 },
    { id: 2, name: "Veggie Salad", description: "Fresh mixed salad with seasonal vegetables", price: 4.0 },
    { id: 3, name: "Grilled Chicken", description: "Grilled chicken breast with sides", price: 7.0 },
    { id: 4, name: "Vegetarian Pasta", description: "A pasta dish with vegetarian sauce", price: 6.0 },
  ]);

  const [selectedMeals, setSelectedMeals] = useState([]);

  const toggleSelection = (id) => {
    setMeals((prev) =>
      prev.map((meal) =>
        meal.id === id
          ? { ...meal, selected: !meal.selected }
          : meal
      )
    );
    setSelectedMeals((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    setMeals(meals.filter((meal) => !selectedMeals.includes(meal.id)));
    setSelectedMeals([]); // Clear selected meals after delete
  };

  const handleAdd = () => {
    alert("Add new meal functionality");
  };

  const handleEdit = () => {
    if (selectedMeals.length > 0) {
      alert(`Edit meal with IDs: ${selectedMeals.join(", ")}`);
    } else {
      alert("Select at least one meal to edit");
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
    { header: "Meal", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Price", accessor: "price", render: (price) => `$${price.toFixed(2)}` },
    {
      header: "Actions",
      accessor: "actions",
      render: (_, row) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Viewing details for ${row.name}`)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Meals</h1>

      <div className="flex justify-end space-x-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleEdit}
          disabled={selectedMeals.length === 0}
        >
          Edit
        </Button>

        {/* Always show Delete button */}
        <Button
          variant="contained"
          color={selectedMeals.length > 0 ? "error" : "default"} // Change color based on selection
          onClick={handleDelete}
          disabled={selectedMeals.length === 0} // Disable if no meals are selected
        >
          Delete
        </Button>
      </div>

      <Table columns={columns} data={meals} />

      <div className="mt-4 flex justify-center">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
};

export default MealsPage;
