import GuestLayout from "@/Layouts/GuestLayout";
import { fetchMeal } from "@/Utils/utils";
import { Head, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import mealTemp from '../../../assets/mealTemp.jpg'
const MealsDetails = ({ meal }) => {
    const [mealData, setMealData] = useState(meal);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!mealData) {
            const getMeal = async () => {
                try {
                    const response = await fetchMeal(1);
                    setMealData(response);
                } catch (error) {
                    console.error("Failed to fetch meal:", error);
                } finally {
                    setLoading(false);
                }
            };

            getMeal();
        } else {
            setLoading(false);
        }
    }, [mealData]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-700">
                Loading...
            </div>
        );
    }

    return (
        <GuestLayout>
            <Head title="Meal Details" />
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-700 py-10 text-center text-white">
                <h1 className="text-4xl font-extrabold">{mealData.name}</h1>
                <p className="mt-3 text-lg italic">{mealData.short_description}</p>
            </section>

            {/* Details Section */}
            <section className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Image Section */}
                    <div className="w-full">

                        <img
                            src={mealData.image || mealTemp}
                            alt={mealData.mealName || "Meal Image"}
                            onLoad={() => setImageLoaded(true)}
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src = mealTemp;
                            }}
                            className="rounded-lg shadow-lg w-full object-cover h-[300px] md:h-[500px]"
                        />
                    </div>

                    {/* Meal Information */}
                    <div className="space-y-6">
                        {/* Description */}
                        <div className="p-6 rounded-lg shadow-md bg-white">
                            <h2 className="text-xl font-bold text-gray-800">Description</h2>
                            <p className="mt-2 text-gray-600">{mealData.long_description}</p>
                        </div>

                        {/* Key Info: Calories, Dietary Type, Delivery Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center p-4 rounded-lg bg-emerald-100 shadow">
                                <span className="bg-emerald-500 text-white rounded-full p-3 text-sm mr-4">
                                    🔥
                                </span>
                                <div>
                                    <p className="font-bold text-gray-700">Calories</p>
                                    <p className="text-gray-600">{mealData.calories} kcal</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg bg-blue-100 shadow">
                                <span className="bg-blue-500 text-white rounded-full p-3 text-sm mr-4">
                                    🥗
                                </span>
                                <div>
                                    <p className="font-bold text-gray-700">Dietary Type</p>
                                    <p className="text-gray-600 capitalize">{mealData.dietary_type}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg bg-yellow-100 shadow">
                                <span className="bg-yellow-500 text-white rounded-full p-3 text-sm mr-4">
                                    📦
                                </span>
                                <div>
                                    <p className="font-bold text-gray-700">Delivery Type</p>
                                    <p className="text-gray-600 capitalize">{mealData.delivery_type}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg bg-green-100 shadow">
                                <span className="bg-green-500 text-white rounded-full p-3 text-sm mr-4">
                                    ✔️
                                </span>
                                <div>
                                    <p className="font-bold text-gray-700">Availability</p>
                                    <p className="text-gray-600">Available This Week</p>
                                </div>
                            </div>
                        </div>

                        {/* Order Button */}
                        <div className="text-center">
                            <button className="w-full md:w-auto py-3 px-6 bg-secondary-700 text-white font-bold rounded-lg hover:bg-secondary-800 transition">
                                Order Meal
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Meals */}
            <section className="text-center my-10">
                <Link
                    href={route("getmeal")}
                    className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                >
                    Back to Meals
                </Link>
            </section>
        </GuestLayout>
    );
};

export default MealsDetails;
