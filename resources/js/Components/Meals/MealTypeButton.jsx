const MealTypeButton = ({ mealType, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`border py-1 px-2 rounded-md ${mealType.isActive ? "bg-secondary-500 text-white" : ""
                }`}
        >
            {mealType.type}
        </button>
    );
};

export default MealTypeButton;
