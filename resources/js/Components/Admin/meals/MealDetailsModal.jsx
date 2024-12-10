import { capitalize } from "@/Utils/utils";
import React from "react";

const MealDetailModal = ({ meal, onClose }) => {
    if (!meal) return null; // Guard clause in case meal is null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">Meal Details</h2>
                <div className="space-y-2">
                    <div><strong>ID:</strong> {meal.meal_id}</div>
                    <div><strong>Name:</strong> {meal.name}</div>
                    <div><strong>Price:</strong> ${meal.price}</div>
                    <div><strong>Status:</strong> {capitalize(meal.status)}</div>
                    <div><strong>Dietary Type:</strong> {meal.dietary_type}</div>
                    <div><strong>Description:</strong> {meal.short_description || "No description available"}</div>
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealDetailModal;
