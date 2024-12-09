import React from "react";
import MealCard from "./MealCard";
import useWeeklyMealStore from "../../../store/useWeeklyMealStore";
import useMealTypeStore from "../../../store/useMealTypeStore";

const MealSection = () => {
    const { weeklyMeals } = useWeeklyMealStore();
    const { mealTypes } = useMealTypeStore();

    const currentMealType = mealTypes.find((el) => el.isActive === true);

    return (
        <section className="px-8 sm:px-0 xl:px-10 min-[1300px]:px-0">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
                {weeklyMeals
                    .filter(
                        (el) =>
                            currentMealType.type === "All" ||
                            el.deliveryType === currentMealType.type
                    )
                    .map((weeklyMeal) => (
                        <MealCard key={weeklyMeal.id} weeklyMeal={weeklyMeal} />
                    ))}
            </div>
        </section>
    );
};

export default MealSection;
