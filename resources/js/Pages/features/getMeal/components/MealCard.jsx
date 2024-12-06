import React from "react";
import meal1 from "../../../../../assets/meal1.jpeg";
import { Link } from "@inertiajs/react";

const MealCard = ({
    weeklyMeal: {
        id,
        mealName,
        description,
        calories,
        dairyFree,
        nutsFree,
        glutenFree,
        deliveryType,
        image,
    },
}) => {
    // const deliType = deliveryType.join(", ");

    return (
        <section className="">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[300px] h-[300px]">
                    <img
                        src={image}
                        alt={mealName}
                        className="w-full h-full object-cover rounded-s"
                    />
                </div>
                <div className="p-4 flex-1 bg-stone-100 rounded-e flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">{mealName}</h2>

                    <p className="text-gray-600 mb-3 text-sm">{description}</p>

                    <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600">
                            {calories} Calories
                        </p>

                        <p
                            className={`text-xs text-gray-600 ${
                                glutenFree ? "" : "text-red-500"
                            }`}
                        >
                            {glutenFree ? "Gluten-Free" : "Contains Gluten"}
                        </p>

                        <p
                            className={`text-xs text-gray-600 ${
                                dairyFree ? "" : "text-red-500"
                            }`}
                        >
                            {dairyFree ? "Dairy-Free" : "Contains Dairy"}
                        </p>

                        <p
                            className={`text-xs text-gray-600 ${
                                nutsFree ? "" : "text-red-500"
                            }`}
                        >
                            {nutsFree ? "Nuts-Free" : "Contains Nuts"}
                        </p>
                    </div>

                    <p className="text-xs text-gray-600 mb-2">
                        <span className="font-semibold">Delivery Type</span>:
                        <span> {deliveryType}</span>
                    </p>

                    <p className="text-xs text-gray-600">
                        <span className="font-semibold">Availability</span>:
                        <span> Available this week</span>
                    </p>

                    <Link href="#" className=" flex justify-end mt-auto">
                        <button className="bg-secondary-500 text-white px-3 py-1.5 text-sm rounded">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MealCard;
