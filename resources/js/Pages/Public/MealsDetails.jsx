import GuestLayout from "@/Layouts/GuestLayout";
import { getMe, getMembersById, getUserById, makeOrder } from "@/Utils/utils";
import { Head, Link, router } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import mealTemp from '../../../assets/mealTemp.jpg'
const MealsDetails = ({ meal }) => {
    const [mealData, setMealData] = useState(meal);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [specialInstructions, setSpecialInstructions] = useState("");

    const confirmOrder = async () => {
        try {
            setMealData(meal);
            const myProfile = await getMe();
            const myUserData = await getUserById(myProfile.id);
            const memberData = await getMembersById(myUserData.member_id);
            const today = new Date().toISOString().split('T')[0];
            const requestData = {
                "meal_id": mealData.id,
                "member_id": memberData.member_id,
                "caregiver_id": memberData.caregivers[0].caregiver_id,
                "status": "pending",
                "total_price": parseFloat(meal.price),
                "order_date": today,
                "delivery_date": today,
                "special_instructions": specialInstructions,
                "rejection_reason": null
            };
            try {
                await makeOrder(requestData);
                alert("Successfully made an order for meal")
            } catch (error) {
                alert("Meal Order failed");
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error("Failed to fetch data.");
            alert("Please log in as a member.");
            router.visit(route('login'));
        }
    };


    const handleOrderClick = () => {
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal without ordering
    };


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
                            <button className="w-full md:w-auto py-3 px-6 bg-secondary-700 text-white font-bold rounded-lg hover:bg-secondary-800 transition" onClick={handleOrderClick}>
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

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[40%]">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Special Instructions</h2>
                        <textarea
                            className="w-full p-4 border rounded-lg"
                            rows="4"
                            value={specialInstructions}
                            onChange={(e) => setSpecialInstructions(e.target.value)}
                            placeholder="Enter any special instructions for the meal"
                        ></textarea>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                                onClick={confirmOrder}
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </GuestLayout>
    );
};

export default MealsDetails;
