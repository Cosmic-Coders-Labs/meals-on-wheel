import React from "react";
import Container from "../../../Components/Container";

const MealInfo = ({
    currentMeal: {
        image,
        calories,
        deliveryType,
        dairyFree,
        nutsFree,
        glutenFree,
    },
}) => {
    return (
        <section className=" mb-10">
            <Container className={"container grid grid-cols-2 gap-10"}>
                <div>
                    <img
                        src={image}
                        className=" rounded-lg shadow-lg w-full h-[500px] border-[2px] border-secondary-700"
                        alt="Grilled Chicken Salad"
                    />
                </div>
                <div className=" flex flex-col gap-10">
                    <div className=" flex flex-col gap-5">
                        <p className="text-xl font-bold">Calories:</p>
                        <p className="text-white">
                            <span className="bg-emerald-500 px-3 py-1  rounded-3xl">
                                {calories} kcal
                            </span>
                        </p>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <p className="text-xl font-bold">Type:</p>
                        <p className="text-white">
                            <span className="bg-emerald-500 px-3 py-1  rounded-3xl">
                                {deliveryType}
                            </span>
                        </p>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <p className="text-xl font-bold">Tag:</p>
                        <div className=" flex gap-3 items-center">
                            <p
                                className={` px-3 py-1 text-white rounded-3xl ${
                                    glutenFree ? "bg-slate-500" : "bg-red-500"
                                }`}
                            >
                                {glutenFree ? "Gluten-Free" : "Contains Gluten"}
                            </p>

                            <p
                                className={`  px-3 py-1 text-white rounded-3xl ${
                                    dairyFree ? "bg-slate-500" : "bg-red-500"
                                }`}
                            >
                                {dairyFree ? "Dairy-Free" : "Contains Dairy"}
                            </p>

                            <p
                                className={` px-3 py-1 text-white rounded-3xl ${
                                    nutsFree ? "bg-slate-500" : "bg-red-500"
                                }`}
                            >
                                {nutsFree ? "Nuts-Free" : "Contains Nuts"}
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <p className="text-xl font-bold">Availability:</p>
                        <p className="text-white">
                            <span className="bg-emerald-500 px-3 py-1  rounded-3xl">
                                Available This Week
                            </span>
                        </p>
                    </div>
                    <button className="mt-auto py-2 px-3 rounded-lg bg-secondary-700 text-white">
                        Order Meal
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default MealInfo;
