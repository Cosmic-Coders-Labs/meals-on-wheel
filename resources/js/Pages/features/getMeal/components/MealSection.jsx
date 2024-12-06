import React from "react";
import MealCard from "./MealCard";
import MealCard2 from "./MealCard2";
import useWeeklyMealStore from "../../../store/useWeeklyMealStore";
import useMealTypeStore from "../../../store/useMealTypeStore";

const MealSection = () => {
    const { weeklyMeals } = useWeeklyMealStore();
    const { mealTypes } = useMealTypeStore();

    const currentMealType = mealTypes.find((el) => el.isActive === true);

    return (
        <section>
            <div className=" grid grid-cols-2 gap-10 my-10">
                {/* <MealCard />
                <MealCard2 />
                <MealCard />
                <MealCard2 />
                <MealCard />
                <MealCard2 /> */}

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
