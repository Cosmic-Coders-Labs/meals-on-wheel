import React, { useReducer } from "react";
import MealTypeButton from "./MealTypeButton";

// Initial state for meal types
const initialMealTypes = [
    { id: 0, type: "All", isActive: true },
    { id: 1, type: "Hot Meal", isActive: false },
    { id: 2, type: "Frozen Meal", isActive: false },
];

// Reducer function to manage state updates
const mealTypeReducer = (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_MEAL_TYPE":
            return state.map((mealType) =>
                mealType.id === action.payload
                    ? { ...mealType, isActive: true }
                    : { ...mealType, isActive: false }
            );
        default:
            return state;
    }
};

const FilterMealTypeAndAllergySection = () => {
    const [mealTypes, dispatch] = useReducer(mealTypeReducer, initialMealTypes);

    const handleMealTypeClick = (typeId) => {
        dispatch({ type: "SET_ACTIVE_MEAL_TYPE", payload: typeId });
    };

    return (
        <section className="flex justify-between mt-10">
            <div className="flex items-center">
                <p>Meal Type:</p>
                <div className="ms-5 flex gap-5 items-center justify-center">
                    {mealTypes.map((mealType) => (
                        <MealTypeButton
                            key={mealType.id}
                            mealType={mealType}
                            onClick={() => handleMealTypeClick(mealType.id)} // Pass the click handler
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center">
                <p>Exclude Allergy:</p>
                <div className="ms-5 flex gap-5 items-center justify-center">
                    <div className="flex gap-1">
                        <input type="checkbox" name="dairy" id="dairy" />
                        <label htmlFor="dairy">Dairy</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="nut" id="nut" />
                        <label htmlFor="nut">Nuts</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" name="gluten" id="gluten" />
                        <label htmlFor="gluten">Gluten</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterMealTypeAndAllergySection;
