import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

import React from "react";

const GetMealTitle = () => {
    return (
        <div className=" flex flex-col justify-center items-center gap-5 mt-10">
            <h1 className=" text-3xl font-playfair font-bold">
                Weekly Meal Plan
            </h1>
            <div className=" border py-1 px-3 rounded-md bg-accent-500 text-white">
                01/12 - 05/12
            </div>
        </div>
    );
};

export default function GetMeal({ auth }) {
    return (
        <GuestLayout>
            <Head title="Get Meal" />
            <GetMealTitle />
            <FilterMealTypeAndAllergySection />
            <MealSection />
        </GuestLayout>
    );
}
