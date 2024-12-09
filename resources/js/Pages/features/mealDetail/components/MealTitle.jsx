import React from "react";

const MealTitle = ({ currentMeal: { mealName, description } }) => {
    return (
        <section className=" flex flex-col justify-center items-center gap-1 bg-secondary-400 my-10 py-4">
            <h1 className=" text-3xl font-bold font-playfair">{mealName}</h1>
            <p className="text-white font-noto">{description}</p>
        </section>
    );
};

export default MealTitle;
