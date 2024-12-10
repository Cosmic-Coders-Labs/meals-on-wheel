import { capitalize } from "@/Utils/utils";
import React, { useState } from "react";
import mealTemp from '../../../assets/mealTemp.jpg'
const MealCard = ({ meal, onViewDetails }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="border rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row relative">
            {/* Image Section */}
            <div className="relative flex-none md:w-1/3  overflow-hidden bg-slate-300">
                {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                        <span className="text-gray-600">Loading...</span>
                    </div>
                )}
                <img
                    src={meal.image || mealTemp}
                    alt={meal.mealName || "Meal Image"}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = mealTemp;
                    }}
                    className={`w-full h-full object-cover max-h-48 transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                />
            </div>
            {/* Content Section */}
            <div className="p-4 flex-grow relative">
                <h2 className="text-lg font-semibold">{meal.mealName || "Unnamed Meal"}</h2>
                <p className="text-sm text-gray-600 mb-3">
                    {meal.description || "No description available."}
                </p>

                <p className="text-sm text-black font-medium">
                    <b>Delivery</b>: {meal.deliveryType || "Not specified"}
                </p>
                <p className="text-sm text-gray-800 mt-1">
                    <b>Availability</b>: {capitalize(meal.availability) || "Not available"}
                </p>
                <p className="text-sm text-black mt-1">
                    <b>Allergens</b>:{" "}
                    {Array.isArray(meal.allergens) && meal.allergens.length > 0
                        ? meal.allergens.join(", ")
                        : "None"}
                </p>
                {/* View Details Button */}
                <div className="flex w-full justify-end">
                    <button
                        onClick={() => onViewDetails(meal)}
                        className="bg-secondary-500 text-white px-4 mt-3 py-2 rounded-lg hover:bg-secondary-600"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;
