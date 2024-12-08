import React from "react";
import Container from "../../../Components/Container";

const NutritionInfo = ({ currentMeal: { calories, protein, carbohydrate, fat }}) => {
    return (
        <section className="mb-10">
            <Container className={"container"}>
                <h1 className="text-2xl font-bold mb-8 font-playfair">
                    Nutritional Information
                </h1>
                <div className="flex justify-center rounded-lg overflow-hidden font-noto">
                    <table className="w-1/2 border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-6 py-3 text-start text-sm font-semibold text-gray-900">
                                    Nutrient
                                </th>
                                <th className="px-6 py-3 text-start text-sm font-semibold text-gray-900">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    Calories
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-start">
                                    {calories} kcal
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    Protein
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-start">
                                    {protein} g
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    Carbohydrates
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-start">
                                    {carbohydrate} g
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    Fat
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 text-start">
                                    {fat} g
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
};

export default NutritionInfo;
