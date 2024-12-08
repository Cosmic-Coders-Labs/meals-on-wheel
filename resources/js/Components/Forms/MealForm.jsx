import React, { useState, useEffect } from "react";

const MealFormModal = ({ modalType, meal, onClose, onSubmit, userId }) => {
    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        image: "",
        reason_for_rejection: null,
        price: 0,
        status: "available",
        dietary_type: "none",
        calories: 0,
        user_id: userId || 1,  // Defaulting to 1 if userId is not passed
    });

    useEffect(() => {
        if (modalType === "edit" && meal) {
            setFormData({
                name: meal.name || "",
                ingredients: meal.ingredients || "",
                image: meal.image || "",
                reason_for_rejection: null,
                price: meal.price || 0,
                status: meal.status || "available",
                dietary_type: meal.dietary_type || "none",
                calories: meal.calories || 0,
                user_id: meal.user_id || 1,  // Ensure user_id is populated
            });
        }
    }, [modalType, meal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);  // Pass formData to parent for submission
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-4">
                    {modalType === "add" ? "Add Meal" : "Edit Meal"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Ingredients</label>
                        <textarea
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Calories</label>
                        <input
                            type="number"
                            name="calories"
                            value={formData.calories}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Dietary Type</label>
                        <select
                            name="dietary_type"
                            value={formData.dietary_type}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="none">None</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="gluten-free">Gluten-Free</option>
                        </select>
                    </div>
                    {/* Hidden input for user_id (optional) */}
                    <input
                        type="hidden"
                        name="user_id"
                        value={formData.user_id}
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            {modalType === "add" ? "Add Meal" : "Update Meal"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MealFormModal;
