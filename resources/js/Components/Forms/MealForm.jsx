import React, { useState, useEffect } from "react";
import MediaLibraryAttachment from "../MediaLibraryAttachment";
import axios from "axios";

const MealFormModal = ({ modalType, meal, onClose, onSubmit, userId }) => {
    const [formData, setFormData] = useState({
        name: "",
        ingredients: [],
        allergens: [],
        short_description: "",
        long_description: "",
        image: null,
        reason_for_rejection: "",
        price: "",
        status: "available",
        delivery_type: "hot-meal",
        dietary_type: "vegetarian",
        calories: "",
        user_id: userId || 1,
    });

    const [validationErrors, setValidationErrors] = useState(null);
    const [responseMessage, setResponseMessage] = useState("");

    // Populate form for editing
    useEffect(() => {
        if (modalType === "edit" && meal) {
            setFormData({
                name: meal.name || "",
                ingredients: meal.ingredients || [],
                allergens: meal.allergens || [],
                short_description: meal.short_description || "",
                long_description: meal.long_description || "",
                image: meal.image || null,
                reason_for_rejection: meal.reason_for_rejection || "",
                price: meal.price || "",
                status: meal.status || "available",
                delivery_type: meal.delivery_type || "hot-meal",
                dietary_type: meal.dietary_type || "vegetarian",
                calories: meal.calories || "",
                user_id: meal.user_id || 1,
            });
        }
    }, [modalType, meal]);

    const handleFileChange = (file) => {
        setFormData((prev) => ({ ...prev, image: file }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newFormData = new FormData();
        newFormData.append("name", formData.name);
        formData.ingredients.forEach((ingredient) => newFormData.append("ingredients[]", ingredient));
        formData.allergens.forEach((allergen) => newFormData.append("allergens[]", allergen));
        newFormData.append("short_description", formData.short_description);
        newFormData.append("long_description", formData.long_description);
        newFormData.append("price", formData.price);
        newFormData.append("status", formData.status);
        newFormData.append("delivery_type", formData.delivery_type);
        newFormData.append("dietary_type", formData.dietary_type);
        newFormData.append("calories", formData.calories);
        newFormData.append("user_id", formData.user_id);
        if (formData.image) {
            newFormData.append("image", formData.image);
        }

        for (let [key, value] of newFormData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/meals",
                newFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // Handle success
            setResponseMessage("Meal submitted successfully!");
            alert("Meal submitted successfully!");  // Success alert

            // Reset form data to initial state
            setFormData({
                name: "",
                ingredients: [],
                allergens: [],
                short_description: "",
                long_description: "",
                image: null,
                reason_for_rejection: "",
                price: "",
                status: "available",
                delivery_type: "hot-meal",
                dietary_type: "vegetarian",
                calories: "",
                user_id: userId || 1,
            });

            // Close the modal after submission
            onClose();
            window.location.reload();
        } catch (error) {
            // Handle error
            console.error("Upload error:", error);

            if (error.response) {
                // Server responded with a status outside the 2xx range
                const serverError = error.response.data;
                setValidationErrors({
                    general: serverError.message || "An error occurred.",
                });
            } else if (error.request) {
                // Request was made but no response was received
                setValidationErrors({
                    general: "No response received from the server.",
                });
            } else {
                // Something else caused the error
                setValidationErrors({
                    general: error.message,
                });
            }

            alert("There was an issue with the submission. Please try again.");  // Error alert
        }
    };



    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">
                    {modalType === "add" ? "Add Meal" : "Edit Meal"}
                </h2>
                {responseMessage && <p className="text-green-500">{responseMessage}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Ingredients (Comma separated)</label>
                        <input
                            type="text"
                            name="ingredients"
                            value={formData.ingredients.join(",")}
                            onChange={(e) =>
                                setFormData({ ...formData, ingredients: e.target.value.split(",") })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Allergens */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Allergens (Comma separated)</label>
                        <input
                            type="text"
                            name="allergens"
                            value={formData.allergens.join(",")}
                            onChange={(e) =>
                                setFormData({ ...formData, allergens: e.target.value.split(",") })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Short Description</label>
                        <input
                            type="text"
                            name="short_description"
                            value={formData.short_description}
                            onChange={(e) =>
                                setFormData({ ...formData, short_description: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Long Description */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Long Description</label>
                        <textarea
                            name="long_description"
                            value={formData.long_description}
                            onChange={(e) =>
                                setFormData({ ...formData, long_description: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Delivery Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Delivery Type</label>
                        <select
                            name="delivery_type"
                            value={formData.delivery_type}
                            onChange={(e) =>
                                setFormData({ ...formData, delivery_type: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="hot-meal">Hot Meal</option>
                            <option value="frozen-meal">Frozen Meal</option>
                        </select>
                    </div>

                    {/* Dietary Type */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Dietary Type</label>
                        <select
                            name="dietary_type"
                            value={formData.dietary_type}
                            onChange={(e) =>
                                setFormData({ ...formData, dietary_type: e.target.value })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="gluten-free">Gluten Free</option>
                            <option value="none">None</option>
                        </select>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Image</label>
                        <MediaLibraryAttachment
                            name="fileUpload"
                            initialValue={null}
                            validationRules={{ maxSizeInKB: 2048, acceptedTypes: ["image/jpeg", "image/png"] }}
                            onFileChange={handleFileChange}
                        />
                        {formData.image && (
                            <div className="mt-2">
                                Images Uploaded
                            </div>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({ ...formData, price: parseFloat(e.target.value) })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Calories */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Calories</label>
                        <input
                            type="number"
                            name="calories"
                            value={formData.calories}
                            onChange={(e) =>
                                setFormData({ ...formData, calories: parseInt(e.target.value) })
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>

                    {/* Error Handling */}
                    {validationErrors?.general && (
                        <div className="text-red-500">{validationErrors.general}</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default MealFormModal;
