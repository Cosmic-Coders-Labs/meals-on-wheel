import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import MealTitle from "../components/MealTitle";
import MealInfo from "../components/MealInfo";
import MealDescription from "../components/MealDescription";
import NutritionInfo from "../components/NutritionInfo";
import AllergyInfo from "../components/AllergyInfo";
import useWeeklyMealStore from "../../../store/useWeeklyMealStore";

const MealDetailPage = () => {
    const currentUrl = window.location.href;
    // console.log(currentUrl);
    // const mealId = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
    // console.log(mealId);
    const mealSlug = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
    // console.log(mealSlug);

    const { weeklyMeals } = useWeeklyMealStore();

    // const currentMeal = weeklyMeals.find((el) => el.id === parseInt(mealId));
    const currentMeal = weeklyMeals.find((el) => el.slug === mealSlug);
    // console.log(currentMeal);

    return (
        <section className="flex flex-col min-h-screen">
            <Header />

            <MealTitle currentMeal={currentMeal} />
            <MealInfo currentMeal={currentMeal} />
            <MealDescription currentMeal={currentMeal} />
            <NutritionInfo currentMeal={currentMeal} />
            <AllergyInfo currentMeal={currentMeal} />

            <Footer />
        </section>
    );
};

export default MealDetailPage;
