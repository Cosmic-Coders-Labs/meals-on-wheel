import React from "react";
import { MdClose, MdFastfood } from "react-icons/md";

const MemberOrderDetailModal = ({ order, onClose }) => {
    if (!order) return null;

    const { meal, rejection_reason, status } = order;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="flex items-center space-x-2">
                        <MdFastfood className="text-yellow-500 text-3xl" />
                        <h2 className="text-2xl font-bold">Meal Details</h2>
                    </div>
                    <button
                        className="text-red-500 font-bold text-2xl hover:text-red-700"
                        onClick={onClose}
                    >
                        <MdClose />
                    </button>
                </div>

                {/* Rejection Reason */}
                {status === "cancelled" && (
                    <div className="mb-6 p-4 border rounded bg-red-100">
                        <strong className="text-red-600">Rejection Reason:</strong>{" "}
                        {rejection_reason || "No reason provided."}
                    </div>
                )}

                {/* Meal Details */}
                {meal ? (
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <strong className="text-gray-600">Meal Name:</strong> {meal.name}
                            </div>
                            <div>
                                <strong className="text-gray-600">Short Description:</strong> {meal.short_description}
                            </div>
                            <div>
                                <strong className="text-gray-600">Ingredients:</strong>{" "}
                                {
                                    (() => {
                                        try {
                                            // Try parsing as JSON
                                            return JSON.parse(meal.ingredients).join(", ");
                                        } catch (error) {
                                            return meal.ingredients.join(", ");
                                        }
                                    })()
                                }
                            </div>
                            <div>
                                <strong className="text-gray-600">Price:</strong> ${meal.price}
                            </div>
                            <div>
                                <strong className="text-gray-600">Dietary Type:</strong> {meal.dietary_type}
                            </div>
                            <div>
                                <strong className="text-gray-600">Calories:</strong> {meal.calories} kcal
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-600">Meal details are not available.</div>
                )}
            </div>
        </div>
    );
};

export default MemberOrderDetailModal;
