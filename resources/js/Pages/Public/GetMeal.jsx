import MealSection from '@/Components/Meals/MealSection';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

import React, { useEffect, useState } from "react";

const GetMealTitle = () => {
    const [date, setDate] = useState();

<<<<<<< HEAD
    useEffect(()=>{
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        setDate(dd);
=======
    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart('2', '0');
        setDate(parseInt(dd));
>>>>>>> a786e44697ad825a9ac59777b0ba02375d728747
    })
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center gap-5 pt-10">
            <h1 className=" text-3xl font-playfair font-bold">
                Weekly Meal Plan
            </h1>
            <div className=" border py-1 px-3 rounded-md bg-accent-500 text-white">
<<<<<<< HEAD
                {date }/12 - { parseInt(date) + 7}/12
=======
                {date}/12 - {date + 7}/12
>>>>>>> a786e44697ad825a9ac59777b0ba02375d728747
            </div>
        </div>
    );
};

export default function GetMeal({ auth }) {
    return (
        <GuestLayout>
            <Head title="Get Meal" />
            <GetMealTitle />
            <MealSection />
        </GuestLayout>
    );
}
