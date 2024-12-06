import React from "react";
import useMealTypeStore from "../../../store/useMealTypeStore";

const MealTypeButton = ({ mealType: { id, type, isActive } }) => {
    const { activeMealType } = useMealTypeStore();

    const handleClick = () => {
        activeMealType(id);
    };

    return (
        <button
            onClick={handleClick}
            className={`border py-1 px-2 rounded-md ${
                isActive && "bg-secondary-500 text-white"
            }`}
        >
            {type}
        </button>
    );
};

export default MealTypeButton;
