import React from "react";
import useMealTypeStore from "./useMealTypeStore";
import MealTypeButton from "./MealTypeButton";

const FilterMealTypeAndAllergySection = () => {
    const { mealTypes } = useMealTypeStore();

    return (
        <section className="flex justify-between mt-10">
            <div className=" flex items-center">
                <p>Meal Type:</p>
                <div className="ms-5 flex gap-5 items-center justify-center">
                    {mealTypes.map((mealType) => (
                        <MealTypeButton key={mealType.id} mealType={mealType} />
                    ))}
                </div>
            </div>

            <div className="flex items-center">
                <p>Exclude Allergy:</p>
                <div className="ms-5 flex gap-5 items-center justify-center">
                    <div className=" flex gap-1">
                        <input type="checkbox" name="dairy" id="dairy" />
                        <label htmlFor="dairy">Dairy</label>
                    </div>
                    <div className=" flex gap-1">
                        <input type="checkbox" name="nut" id="nut" />
                        <label htmlFor="nut">Nuts</label>
                    </div>
                    <div className=" flex gap-1">
                        <input type="checkbox" name="gluten" id="gluten" />
                        <label htmlFor="gluten">Gluten</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterMealTypeAndAllergySection;
