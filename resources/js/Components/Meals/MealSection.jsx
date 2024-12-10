import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";
import { fetchMeals } from "@/Utils/utils";
import { router } from "@inertiajs/react";

const MealSection = () => {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [activeMealType, setActiveMealType] = useState("All");
    const [excludedAllergens, setExcludedAllergens] = useState([]);
    const [loading, setLoading] = useState(true);

    const normalizeDeliveryType = (deliveryType) => {
        switch (deliveryType) {
            case "hot-meal":
                return "Hot Meal";
            case "frozen-meal":
                return "Frozen Meal";
            default:
                return deliveryType;
        }
    };

    const getMeals = async () => {
        try {
            setLoading(true);
            const data = await fetchMeals();
            console.log(data);
            const formattedData = data.map(meal => ({
                id: meal.meal_id,
                mealName: meal.name,
                description: meal.short_description,
                allergens: Array.isArray(meal.allergens) ? meal.allergens : [],
                deliveryType: normalizeDeliveryType(meal.delivery_type) || "Unknown",
                image: meal.image || "default_image_url",
                availability: meal.status || 'Not Available',
            }));
            setMeals(formattedData);
            setFilteredMeals(formattedData);
        } catch (error) {
            console.error("Failed to fetch meals:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMeals(); // Fetch meals on component mount
    }, []);

    const filterMeals = () => {
        let filtered = meals;

        // Filter by meal type
        if (activeMealType !== "All") {
            filtered = filtered.filter(
                (meal) => meal.deliveryType === activeMealType
            );
        }

        // Exclude allergens
        if (excludedAllergens.length > 0) {
            filtered = filtered.filter(
                (meal) =>
                    !meal.allergens.some((allergen) =>
                        excludedAllergens.includes(allergen)
                    )
            );
        }

        setFilteredMeals(filtered);
    };

    useEffect(() => {
        filterMeals();
    }, [activeMealType, excludedAllergens, meals]); // Re-run filter whenever meals or filters change

    const handleMealTypeClick = (type) => {
        setActiveMealType(type);
    };

    const handleAllergenToggle = (allergen) => {
        setExcludedAllergens((prev) =>
            prev.includes(allergen)
                ? prev.filter((a) => a !== allergen)
                : [...prev, allergen]
        );
    };

    return (
        <div className="bg-gray-100 text-gray-800 p-8">
            {/* Responsive Menu Items */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                {/* Meal Type Filters */}
                <div className="flex flex-row items-center justify-center space-x-2 w-full sm:space-y-0 h-full">
                    {["All", "Hot Meal", "Frozen Meal"].map((type) => (
                        <button
                            key={type}
                            onClick={() => handleMealTypeClick(type)}
                            className={`px-4 py-2 border text-sm h-full rounded-md ${activeMealType === type
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-800"
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            {/* Meal Cards or Loading Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {loading ? (
                    <div className="col-span-full text-center text-lg font-semibold">
                        Loading...
                    </div>
                ) : filteredMeals.length > 0 ? (
                    filteredMeals.map((meal) => (
                        <MealCard key={meal.id || meal.meal_id} meal={meal} onViewDetails={() => router.visit(`meals/${meal.id}`)} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-lg font-semibold">
                        No meals available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealSection;
